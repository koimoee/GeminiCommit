import * as vscode from 'vscode';
import { spawn } from 'child_process';
import { Logger } from '../utils/logger';
import {
    GitExtensionNotFoundError,
    NoRepositoriesFoundError,
    NoChangesDetectedError,
    NoRepositorySelectedError
} from '../models/errors';

export class GitService {
    static async getDiff(repoPath: string, onlyStaged: boolean = false): Promise<string> {
        Logger.log(`Getting diff for repository: ${repoPath}, onlyStaged: ${onlyStaged}`);
        const diffCommand = onlyStaged ? ['diff', '--staged'] : ['diff'];
        const diff = await this.executeGitCommand(diffCommand, repoPath);
        if (!diff.trim()) {
            throw new NoChangesDetectedError(onlyStaged ? 'No staged changes detected.' : 'No changes detected.');
        }
        return diff;
    }

    private static executeGitCommand(args: string[], cwd: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const childProcess = spawn('git', args, { cwd });
            let stdout = '';
            let stderr = '';

            childProcess.stdout.on('data', (data) => { stdout += data; });
            childProcess.stderr.on('data', (data) => { stderr += data; });
            childProcess.on('close', (code) => {
                code !== 0
                    ? reject(new Error(`Git ${args.join(' ')} failed with code ${code}: ${stderr}`))
                    : resolve(stdout);
            });
        });
    }

    static async getRepositories(): Promise<vscode.SourceControl[]> {
        const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git');
        if (!gitExtension) throw new GitExtensionNotFoundError();

        const git = gitExtension.exports.getAPI(1);
        const repos = git.repositories;
        if (repos.length === 0) throw new NoRepositoriesFoundError();

        return repos;
    }

    static async selectRepository(repos: vscode.SourceControl[]): Promise<vscode.SourceControl> {
        if (repos.length === 1) return repos[0];

        const repoOptions = repos.map(repo => ({
            label: repo.rootUri ? repo.rootUri.fsPath : 'Unknown repository path',
            repository: repo
        }));

        const selected = await vscode.window.showQuickPick(repoOptions, {
            placeHolder: 'Select the repository to generate commit message'
        });

        if (!selected) throw new NoRepositorySelectedError();
        return selected.repository;
    }

    static async getChangedFiles(repoPath: string, onlyStaged: boolean = false): Promise<string[]> {
        const statusCommand = ['status', '--porcelain'];
        const output = await this.executeGitCommand(statusCommand, repoPath);
        return output.split('\n')
            .filter(line => line.trim() !== '')
            .filter(line => !onlyStaged || line[0] === 'M' || line[0] === 'A' || line[0] === 'D' || line[0] === 'R')
            .map(line => line.substring(3).trim());
    }
}

interface GitExtension {
    getAPI(version: number): GitAPI;
}

interface GitAPI {
    repositories: vscode.SourceControl[];
}
export const englishShortInstructions = `Generate a concise Git commit message based on the provided diff. Follow these rules:
1. Use the format: <type>(<filename/scope>): <description>
2. Types:
- feat: for new features or significant updates
- fix: for bug fixes
- docs: for documentation changes
- style: for formatting, missing semi-colons, etc.
- refactor: for restructuring code without changing its behavior
- test: for adding or changing tests
- chore: for small tasks, maintenance, or trivial changes
- perf: for performance improvements
- ci: for CI/CD pipeline updates
- build: for changes that affect the build system or dependencies
3. Keep the entire message under 50 characters
4. Use imperative mood (e.g., "Add" not "Added")
5. Focus on the overall change, not specific details
6. mention filename in scope without prefix and without line numbers

Few shot examples:
1. Diff: Added new user authentication feature
   Message: feat(index): Add user authentication

2. Diff: Fixed bug in payment processing
   Message: fix(index): Resolve payment processing issue

3. Diff: Updated README with new installation steps
   Message: docs(index): Update installation instructions

4. Diff: Reformatted code to follow style guide
   Message: style(index): Apply consistent code formatting

5. Diff: Restructured database queries for efficiency
   Message: refactor(index): Optimize database queries`;

export const englishLongInstructions = `Create a detailed Git commit message based on the provided diff. Follow these guidelines:
1. First line: <type>(<filename/scope>): <short summary> (50 chars or less)
2. Types:
- feat: for new features or significant updates
- fix: for bug fixes
- docs: for documentation changes
- style: for formatting, missing semi-colons, etc.
- refactor: for restructuring code without changing its behavior
- test: for adding or changing tests
- chore: for small tasks, maintenance, or trivial changes
- perf: for performance improvements
- ci: for CI/CD pipeline updates
- build: for changes that affect the build system or dependencies
3. Leave a blank line after the first line
4. Subsequent lines: detailed description (wrap at 72 chars)
5. Use imperative mood in all lines
6. Explain what and why, not how
7. Mention significant changes and their impact
8. mention filename in scope without prefix and without line numbers
9. Maximum 5 lines total (including blank line)

Few shot examples:
1. Diff: Implemented user registration and login functionality
   Message: feat(index): Add user authentication system

   Implement secure user registration and login processes
   Integrate email verification for new accounts
   Enhance overall application security

2. Diff: Fixed critical bug causing data loss during backup
   Message: fix(index): Resolve data loss issue in backup process

   Identify and patch vulnerability in backup routine
   Implement additional data integrity checks
   Improve error handling and logging for backups

3. Diff: Updated API documentation with new endpoints
   Message: docs(index): Enhance API documentation

   Add descriptions for newly implemented API endpoints
   Include usage examples and response formats
   Update authentication requirements section

4. Diff: Refactored database access layer for better performance
   Message: refactor(index): Optimize database operations

   Implement connection pooling for improved efficiency
   Rewrite inefficient queries using proper indexing
   Add caching layer for frequently accessed data`;

export const russianShortInstructions = `Сгенерируйте краткое сообщение о фиксации в Git на основе предоставленного diff. Следуйте этим правилам:
1. Используйте формат: <тип>(<файл/скоп>): <описание>.
2. Типы:
- feat: for new features or significant updates
- fix: for bug fixes
- docs: for documentation changes
- style: for formatting, missing semi-colons, etc.
- refactor: for restructuring code without changing its behavior
- test: for adding or changing tests
- chore: for small tasks, maintenance, or trivial changes
- perf: for performance improvements
- ci: for CI/CD pipeline updates
- build: for changes that affect the build system or dependencies
3. Не превышайте 50 символов во всем сообщении
4. Используйте повелительное наклонение (например, «Добавьте», а не «Добавил»).
5. Сосредоточьтесь на общем изменении, а не на конкретных деталях
6. упоминайте имя файла в области видимости без префикса и без номеров строк

Примеры:
1. Diff: Добавлена новая функция аутентификации пользователей
   Сообщение: feat(index): Добавил аутентификацию пользователей

2. Diff: Исправлен баг в обработке платежей
   Сообщение: fix(index): Исправил обработку платежей

3. Diff: Обновлен README с новыми шагами установки
   Сообщение: docs(index): Обновил инструкции по установке

4. Diff: Отформатирован код в соответствии с руководством по стилю
   Сообщение: style(index): Применил единый стиль кода

5. Diff: Реструктурированы запросы к базе данных для эффективности
   Сообщение: refactor(index): Оптимизировал запросы к БД`;

export const russianLongInstructions = `Создайте подробное сообщение о фиксации в Git на основе предоставленного diff. Следуйте этим рекомендациям:
1. Первая строка: <тип>(<имя файла/скоп>): <краткое резюме> (не более 50 символов).
2. Типы:
- feat: for new features or significant updates
- fix: for bug fixes
- docs: for documentation changes
- style: for formatting, missing semi-colons, etc.
- refactor: for restructuring code without changing its behavior
- test: for adding or changing tests
- chore: for small tasks, maintenance, or trivial changes
- perf: for performance improvements
- ci: for CI/CD pipeline updates
- build: for changes that affect the build system or dependencies
3. Оставьте пустую строку после первой строки
4. Последующие строки: подробное описание (обернуть в 72 символа)
5. Используйте повелительное наклонение во всех строках
6. Объясняйте, что и почему, а не как.
7. Упоминайте существенные изменения и их влияние
8. упоминайте имя файла в области видимости без префикса и без номеров строк
9. Не более 5 строк (включая пустую строку)

Примеры:
1. Diff: Реализована функциональность регистрации и входа пользователей
   Сообщение: feat(index): Добавил систему аутентификации пользователей

   Реализовал безопасные процессы регистрации и входа
   Интегрировал проверку электронной почты для новых аккаунтов
   Повысил общую безопасность приложения

2. Diff: Исправлен критический баг, вызывающий потерю данных при резервном копировании
   Сообщение: fix(index): Устранил проблему потери данных при резервировании

   Обнаружил и исправил уязвимость в процессе резервирования
   Внедрил дополнительные проверки целостности данных
   Улучшил обработку ошибок и логирование для резервных копий

3. Diff: Обновлена документация API с новыми эндпоинтами
   Сообщение: docs(index): Улучшил документацию API

   Добавил описания для недавно реализованных эндпоинтов API
   Включил примеры использования и форматы ответов
   Обновил раздел требований аутентификации

4. Diff: Рефакторинг уровня доступа к базе данных для улучшения производительности
   Сообщение: refactor(index): Оптимизировал операции с базой данных

   Реализовал пул соединений для повышения эффективности
   Переписал неэффективные запросы с использованием индексов
   Добавил уровень кэширования для часто запрашиваемых данных`;

export const japanShortInstructions = `与えられた diff に基づいて簡潔な Git のコミットメッセージを生成します。以下のルールに従ってください：
1. 以下のフォーマットを使ってください： <type>(<filename/scope>)： <説明
2. タイプ:
- feat: for new features or significant updates
- fix: for bug fixes
- docs: for documentation changes
- style: for formatting, missing semi-colons, etc.
- refactor: for restructuring code without changing its behavior
- test: for adding or changing tests
- chore: for small tasks, maintenance, or trivial changes
- perf: for performance improvements
- ci: for CI/CD pipeline updates
- build: for changes that affect the build system or dependencies
3. メッセージ全体を50文字以内に収める
4. 命令形を使用する（例：「Add 」ではなく、「Add」）。
5. 特定の詳細ではなく、全体的な変更に焦点を当てる。
6. スコープ内のファイル名には、接頭辞や行番号を付けずに記載する。

いくつかのショット例
1. 差分 新しいユーザー認証機能を追加
   メッセージ: feat(index)： ユーザー認証を追加

2. 差分 支払い処理のバグを修正
   メッセージ: fix(index)： 支払い処理の問題を解決

3. 差分 新しいインストール手順で README を更新
   メッセージ: docs(index)： インストール手順を更新

4. 差分 スタイルガイドに従ってコードを再フォーマット
   メッセージ: style(index)： 一貫したコード書式を適用

5. 差分 効率化のためにデータベースクエリを再構築
   メッセージ: refactor(index)： データベースクエリを最適化する`;

export const japanLongInstructions = `提供された diff を元に Git で詳細なコミットメッセージを作成します。以下のガイドラインに従ってください：
1. 最初の行: <type>(<filename/scope>)： <brief summary> (50文字以内)。
2. タイプ:
- feat: for new features or significant updates
- fix: for bug fixes
- docs: for documentation changes
- style: for formatting, missing semi-colons, etc.
- refactor: for restructuring code without changing its behavior
- test: for adding or changing tests
- chore: for small tasks, maintenance, or trivial changes
- perf: for performance improvements
- ci: for CI/CD pipeline updates
- build: for changes that affect the build system or dependencies;

例
1.Diff: ユーザー登録とログイン機能の実装
   メッセージ: feat(index): ユーザー認証システムを追加した。

   安全な登録とログインプロセスの実装
   新規アカウントのための電子メール認証の統合
   アプリケーション全体のセキュリティの向上

2.差分: バックアップ中にデータが失われる重大なバグを修正した
   メッセージ: fix(index): バックアップ中にデータが失われる問題を修正した。

   バックアッププロセスにおける脆弱性の検出と修正
   データの整合性チェックの追加
   バックアップ時のエラー処理とロギングの改善

3. Diff: 新しいエンドポイントを含むAPIドキュメントの更新
   メッセージ: docs(index): API ドキュメントの改良

   新しく実装された API エンドポイントの説明を追加
   ユースケースとレスポンスフォーマットを追加
   認証要件のセクションを更新

4.差分: パフォーマンス向上のためのデータベースアクセスレイヤーのリファクタリング
   メッセージ: refactor(index): データベース操作の最適化

   コネクションプーリングを実装し、効率を向上させた
   インデックスを使用した非効率なクエリを書き直した
   頻繁にクエリされるデータのキャッシュレイヤーを追加しました;

export const customInstructions = "{customInstructions}";

# Git Interview Questions and Solutions

## GIT

### What is a Version Control System (VCS)?
A Version Control System (VCS) is a tool that helps manage changes to source code over time. It allows multiple developers to collaborate, track changes, and revert to previous versions if needed.

### What is a Git Repository?
A Git repository is a storage space where your project files and their version history are stored. It can be local or hosted on a remote server.

### What does `git clone` do?
The `git clone` command creates a copy of an existing repository, including its history, on your local machine.

### What does the command `git config` do?
The `git config` command is used to configure Git settings, such as user name, email, and preferences.

### Can you explain HEAD in terms of Git and also tell the number of HEADs that can be present in a repository?
HEAD is a pointer to the current branch or commit you are working on. A repository can have only one HEAD at a time.

### What is a conflict?
A conflict occurs when changes from different branches or commits cannot be automatically merged by Git.

### What is the functionality of `git ls-tree`?
The `git ls-tree` command lists the contents of a tree object, such as files and directories, in a specific commit.

### What does `git status` command do?
The `git status` command shows the current state of the working directory and staging area.

### Define “Index”.
The index, also known as the staging area, is where changes are prepared before committing them to the repository.

### What does `git add` command do?
The `git add` command adds changes in the working directory to the staging area.

### Why is it considered to be easy to work on Git?
Git is distributed, fast, and provides powerful branching and merging capabilities, making it easy to collaborate and manage code.

### How will you create a Git repository?
Use `git init` to create a new repository or `git clone` to copy an existing one.

### Tell me something about Git Stash?
Git stash temporarily saves changes in the working directory without committing them, allowing you to work on something else.

### What is the command used to delete a branch?
Use `git branch -d <branch_name>` to delete a branch.

### What differentiates between the commands `git remote` and `git clone`?
- `git remote` manages connections to remote repositories.
- `git clone` copies a repository to your local machine.

### What does `git stash apply` command do?
The `git stash apply` command reapplies stashed changes without removing them from the stash list.

### Differentiate between `git pull` and `git fetch`.
- `git pull` fetches changes and merges them into your current branch.
- `git fetch` only downloads changes without merging.

### Can you give differences between “Pull Request” and “Branch”?
- A branch is a separate line of development.
- A pull request is a request to merge changes from one branch into another.

### Why do we not call Git “Pull Request” as “Push Request”?
A pull request is initiated by the repository owner to review and merge changes, while "push" refers to sending changes to a remote repository.

### Can you tell the difference between Git and GitHub?
- Git is a version control system.
- GitHub is a platform for hosting Git repositories.

### What do the `git diff` and `git status` commands do?
- `git diff` shows changes between commits, branches, or the working directory.
- `git status` shows the state of the working directory and staging area.

### What has to be run to squash multiple commits (last N) into a single commit?
Use `git rebase -i HEAD~N` to squash multiple commits.

### How would you recover a branch that has already pushed changes in the central repository but has been accidentally deleted from every team member’s local machines?
Use `git fetch` followed by `git checkout <branch_name>` to recover the branch.

### Can you tell something about Git Reflog?
Git Reflog records updates to the HEAD, allowing you to recover lost commits.

### What consists of a commit object?
A commit object contains a tree object, parent commit(s), author, committer, and a commit message.

### Explain the levels in Git Config and how can you configure values using them?
- System level: `--system`
- Global level: `--global`
- Local level: `--local`

### What is a detached HEAD and what causes this and how to avoid this?
A detached HEAD occurs when you checkout a specific commit instead of a branch. Avoid it by always working on branches.

### What does `git annotate` command do?
The `git annotate` command shows who made changes to each line of a file and when.

### What is the difference between `git stash apply` vs `git stash pop` command?
- `git stash apply` reapplies stashed changes without removing them.
- `git stash pop` reapplies and removes stashed changes.

### What command helps us know the list of branches merged to master?
Use `git branch --merged master`.

### How will you resolve conflict in Git?
Edit conflicting files, mark them as resolved using `git add`, and commit the changes.

### What is the best advisable step in cases of broken commit: create an additional commit or amend an existing commit?
Amend the existing commit using `git commit --amend`.

### How to revert a bad commit which is already pushed?
Use `git revert <commit_hash>` to create a new commit that undoes the changes.

### What is the functionality of `git cherry-pick` command?
The `git cherry-pick` command applies changes from a specific commit to the current branch.

### Explain steps involved in removing a file from Git index without removing it from the local file system?
Use `git rm --cached <file_name>`.

### What are the factors involved in considering which command to choose among: `git merge` and `git rebase`?
- Use `git merge` for preserving history.
- Use `git rebase` for a cleaner, linear history.

### How do you find a commit which broke something after a merge operation?
Use `git bisect` to find the problematic commit.

### What are the functionalities of `git reset --mixed` and `git merge --abort`?
- `git reset --mixed` resets the index but keeps working directory changes.
- `git merge --abort` aborts a merge in progress.

### Can you tell the differences between `git revert` and `git reset`?
- `git revert` creates a new commit to undo changes.
- `git reset` moves the HEAD and can modify history.

# Git
Git is version control system to keep the record of your all versions of your project,we can go to code files of any version and it we can put this files to cloud soo we can acess them from anywhere in the world.

### Terminal Basic Commands
- `pwd` - It gives you present working directory

- `cd foldername` - It changes your current working directory.

-`ls` - It shows you the files and folders available in your working directory.

### Git Config Commands

- git config --global user.name "Shiv" 

    => It sets the global user name of the user.

- git config --global user.email "shivkounsalye@gmail.com"

    => It sets the global email for the name of git user.

- git config list

    => it gives the list of user config on the system.

### Git 3 stage Architecture
Git have 3 stage as mentioned below : 
1. Working Directory : 

    Working directory is the folder space in which you are working in your local computer.

2. Staging Area

    Staging area from which the files will be go to your working repository in the next commit.

    Basically you are making ready your files before pushing. 

3. Git repository 

    Your final repository which is stored on the cloud and the files pushed over their will be the final.

### Git status
`git status` - It gives us the staus of the repository.

### How to make Git Repository
`git init` - It initialize the repository and .git folder in your repository and we can use the git commands in it.

### Git add

- `git add --a` - It brings all the files in to the stagin area.

- `git add filename` - It only add this file to staging area. We can add single file to staging area. 

### Git Commit -m
`git commit -m "First Commit"`
 
It creates the snapshot of your files and store it in your .git folder.

### Git log
`git log` - It shows us our all commits in the .git folders basically all the versions of the snapshot.

### How to clone the repository from the web like github or gitbucket

`git clone url` - It clones the github,gitbucket or web repository and pulls out the all the code to your working directory.  



### How to delete the .git folder and git repository from your working directory

1. **Ubuntu** - `rm -rf .git` - It deletes the .git folder means we will loose the all the commits and git repository from our working directory.

2. **Windows** - `rmdir .git` - It deletes the .git folder means we will loose the all the commits and git repository from our working directory.

If repository has some subfolders then `rmdir /s .git`

### Git file status Lifecycle

1. **Untracked :-** When we initialize the git repository in the folder then the files called as untracke.

2. **Unmodified :-** When git init the files are being tracked by add . but not modified.

3. **modified :-** When we modify the files even after being in the staging area are called as modified.

4. **staged :-** When we run command `git add .` then all modified files will overrides the files which are staged.

### Git Ignore
We create `touch .gitignore` which will contain the files which to ignore.

Which files we put in the gitignore that will not bother us in the staging commiting and pushing the files to the git remote repository.

- **How to put the files with the group in the gitignore :-**  We can put the extensions with the alll extensions like `*.log` soo this will ignore the all files with the extension `.log`.

- **How to ignore any directory :-** `foldername/` it will all the files inside the folder.


### Git Difference 
When we stage the files in the staging area and after that we modify the files then `git diff` will shows us the difference between that both files.

- `git diff staged` - It will gives us the differnce between staged and modified files.

### How to skip the staging area

- We can skip the stagin are in git by using command `git commit -a -m "comit without staging area`

### How to remove the files and rename the files in git

- `git rm sample.txt` - It will remove the sample.txt file.

- `git rmdir directoryname` - It will remove all directory mentioned there.

**How to rename with git :-** `git mv first.txt first_renamed.txt`

### How to clone the remote project on your system

Cloning the project on your local system means creating the same workspace as its on the serve or remote on your local system.

- **How to clone repository :-** `git clone repositorylink`

### Adding remote server 
Adding the remote server to your local repository means on which online cloud platform you want to store the code soo you can acess it from anywhere soo this is the remote serer like github,bitbucket and etc...

- **How to add remote :-** - `git remote add remotename link`

- **How to add remote :-** - `git remote add remotename2 link2`

WE can add the n number of remotes to our repository and we can push our code on whichever remote on which we want to.

- **How to see all the remotes we added :-** `git remote`

### Git branching

When we create new branch on a branch we will create a new virtual workspace with the same code as before but the previous code will not be affected.

- **How to create new branch :-** `git checkout -b develop` We dont need to use the astirics for branch name.

- **How to checkout another branch :-** `git checkout previous-branch` 

**Please commit your changes while swithing branches.**

### Git Fetch

Git fetch is the command which downloads all the changes from the server or remote repository but it dont apply the chages to our branch soo for applying the changes as well we need to merge the branch will ours.

**How to download the changes :-** `git fetch origin`

**How to apply the changes to the current brach :-  `git merge origin branchname`

### Git branch merging and production

**While merging the branches dont forget to do the git fetch**

We can merge the 2 branches and we an make it both look like same or both will contain the same code.

**How to merge the branches :-** `git merge branchname`

And after merging it you need to run
- `git add .`

- `git commit -m`

And your branches will be merged.

### Pulling Git branch
If the current branch is behind the remote, then by default it will fast-forward the current branch to match the remote. 

Git pull downloads all the changes from the remote server and applies it to local branch.

1. **How to pull any branch from origin :-** `git pull origin branchname`


### Difference between merge and pull

The most important difference between the git pull and git merge is : 

- **Git Merge :-**

    1. Git merge is the most safe method than pull because it will ask you before overriding the changes to do or not. 

    2. In git merge we need to first fetch with `git fetch origin` and then we need to merge with our branch like `git merge origin branchname` soo it will download all the changes from the remote repository and if he have anything doubt about overriding changes it will give merge conflicts in which we need to decide which to override and not.

- **Git pull :-**
    
    1. In git pull it will directly override your repository with the code on that branch which you pulled.

    2. We can pull the branch with `git pull origin branchname`

### Pushing Git branch

Pushing means updating your branch on the remote and pushing all the files which you have on your brannch on the remote.

**How to push code to remote repo :-** `git push origin branchname`






















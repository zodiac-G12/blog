git filter-branch -f --commit-filter '                         
if [ "$GIT_COMMITTER_EMAIL" = "12181838+zodiac-G12@users.noreply.github.com" ];
then
    GIT_COMMITTER_NAME="zodiac-G12";
    GIT_AUTHOR_NAME="zodiac-G12";
    GIT_COMMITTER_EMAIL="12181838+zodiac-G12@users.noreply.github.com";
    GIT_AUTHOR_EMAIL="12181838+zodiac-G12@users.noreply.github.com";git commit-tree "$@";
else
    git commit-tree "$@";
    fi' HEAD

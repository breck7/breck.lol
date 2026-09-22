#Meta
alias ezp="s ~/.zprofile"
alias rzp='source ~/.zprofile' # reload this file (after making edits)

#Sublime
alias s="open -a /Applications/Sublime\ Text.app/"
alias m="smerge"

# One time Setup:
# ln -s "/Applications/Sublime Merge.app/Contents/SharedSupport/bin/smerge" ~/bin/smerge

# Scroll
alias sb="scroll build"
alias so="open index.html"

# Quick HTTP server:
alias serve="python3 -m http.server 8000"

# Instant scratch folders:
alias sf='date_dir=$(date +%Y-%m-%d) && mkdir -p ~/sf/$date_dir && cd ~/sf/$date_dir'

#Git
alias gs="git status"
alias gp="git push"
alias ga="git add ."
alias gb="git branch"
alias gc="git commit --allow-empty-message -m ''"
alias gr="git reset --soft HEAD~1" # Reset one commit back
alias gru="git reset 'HEAD@{1}'" # Undo reset

#ShowBigFiles
alias big="du -a . | sort -n -r | head -n 30"

export PATH="$HOME/bin:$PATH"

# >>> Codex installer >>>
export PATH="/Users/breck/.local/bin:$PATH"
# <<< Codex installer <<<

# KnowBooks
# source ~/knowbooks

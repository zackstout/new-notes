# Vim!

## Moving Around
- One way to select text is entering visual mode and then dragging out the cursor to the end.
- My convention: index finger on J for down, middle on K for up, ring on L for right.
- Why is vimtutor telling me that `a` will take me to the end of the line? Ahhh because they mean `A`.
- type `0` to go to beginning of line.
- applying motions without an action will move the cursor (e.g. `2w`).
- `gg` goes to beginning, `G` to end of file. `500G` goes to line 500.
- `ctrl + o` and `ctrl + i` go back and forward in your cursor history.
- Use `%` to toggle between matches brackets/parentheses.
- `j$` moves cursor to end of next line. (oh yeah duh)
- `10j` moves down ten lines (very useful).

## Utilities
- `u` to undo last command. `U` to restore line. `ctrl + r` to redo command.
- `ctrl + g` to see where you are in the file.
- Type `/` to search for a phrase; use `n` or `N` to cycle through matches.
- Search and replace within a line: `:s/OLD/NEW/g`; within whole file: `:%s/OLD/NEW/g` (can say `/gc` to add confirmation prompts).
- Enter shell commands with `:!COMMAND`.
- Save your file under a name with `:w FILENAME`.
- use `v` to enter visual mode, selecting text that can be modified, deleted, saved, yanked, whatever.
- use `:r FILENAME` to read, or paste, in the contents of a file.
- We can also `:r !COMMAND` to read in the output of a command.

## Actions & Motions
### Deletion
- use `dw` to delete word (with cursor on first letter), until start of next work; `de` to delete until end of current word. `d$` to delete til end of line.
- `d3w` deletes next 3 words.
- `3dd` to delete 3 lines.
- `dd` to delete whole line; works like 'cut', so you can use `p` to paste it, as with `y` for yanking.

### Change
- `r` replaces one character.
- `ce` replaces until end of word. Kinda sucks you have to `esc` out of it.
- `c$` to change til end of line.
- Can use `R` to replace multiple characters...but not too different from `ce`?

### Yank
- works as an operator: to yank til end of line, use `y$`.
- Can we yank from beginning, like bash's `ctrl + u`?
- Similarly, how do we go BACK one or more words?

## Config Options
- `:set ic` makes searches case-insensitive. `noic` takes you back.
- `:set hls is` for highlight and incrementing -- shows partial matches.
- `:set noic` to turn it off.

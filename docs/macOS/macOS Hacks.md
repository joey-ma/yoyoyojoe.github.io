# macOS Hacks

### Hacks for Good

Here's to documenting my notes / learnings.

## OneDrive alias

For those in the Mac community and using OneDrive, they may have encountered this issue that [Onedrive creates an alias automatically within the OneDrive folder][onedrive-issue]. According to some users, apparently initially it was a real folder and as a result, the system drive gets full and my computer stops working properly. For me, it is just super unintuitive and annoys me.

### Solution

Summary:

Find your file path, and Enter this in your Terminal.

```zsh
chflags -h hidden /path/to/OneDrive-alias-folder
```

### Explanation

The `chflags` utility modifies the file flags of the listed files as specified by the flags operand.

The `-h` flag means "If the file is a symbolic link, change the file flags of the link itself rather than the file to which it points." Otherwise, `chflags hidden /path/to/OneDrive-alias-folder` would actually hide the original `/Users/joeymaaaa/Library/CloudStorage/OneDrive-Personal/` and is not what we want to do.

I like the `-v` verbose flag to provide some clue after command execution. 

Be sure you are referencing the alias within the folder, for example, your file path might look like this `/Users/your_username/Library/CloudStorage/OneDrive-Personal/OneDrive`, so the following is what worked for me.

```zsh
chflags -h -v hidden /Users/joeymaaa/Library/CloudStorage/OneDrive-Personal/OneDrive
```

And if you want to reveal a hidden file or folder, you can enter `chflags nohidden file_name` or, in this case: 

```zsh
chflags -h -v nohidden /path/to/OneDrive-alias-folder
```

You can read more about `chflags` by entering `man chflags` into the Terminal. Type `q` to quit the vim (Vi IMproved) text editor environment.

`man` is short for manual and the `man` utility finds and displays online manual documentation pages. If `mansect` is provided, man restricts the search to the specific section of the manual. You can read more about `man` by entering `man man`. 

## Screen Saver Settings

_Unfortunately, I haven't figured this one out yet._

For many Mac users, we would like to customize how our screen saver looks. I enjoy seeing my favorite pictures as a slideshow when my screen saver is on, and now my daughter does, too. However, there is no way to customize the duration for each slide (among other features). This lack of feature has been discovered for a long time, except there has always been some way to hack it. I hope Apple adds this as an official feature someday.

First we can check your current duration setting (usually it is set for 3 seconds)

Paste this in your Terminal (and provide password)
```zsh
sudo /usr/libexec/PlistBuddy -c "print ':JustASlide:mainDuration'" /System/Library/PrivateFrameworks/Slideshows.framework/Versions/A/Resources/Content/EffectDescriptions.plist
```

It will show you the current number in seconds, mine shows 3, which is too short for my preference.

```zsh
Joeys-MacBook-Pro ~ %  sudo /usr/libexec/PlistBuddy -c "print ':JustASlide:mainDuration'" /System/Library/PrivateFrameworks/Slideshows.framework/Versions/A/Resources/Content/EffectDescriptions.plist

Password: # your_password
3
```

:::note

This used to work: paste following in to your Terminal to change it to let say 10 seconds (or any number you like).

```zsh
sudo /usr/libexec/PlistBuddy -c "set ':JustASlide:mainDuration' 10" /System/Library/PrivateFrameworks/Slideshows.framework/Versions/A/Resources/Content/EffectDescriptions.plist
```

However, this solution no longer works as of August 9, 2016. The time setting is readable, but is no longer settable by the terminal command.

:::

It turns out, to display the current settings of the screensaver for the current host, you can also run this command in the Terminal app. It will display a list of settings, including the screensaver's timeout, whether it requires a password to unlock, and the currently selected screensaver module.

```zsh
defaults -currentHost read com.apple.screensaver
```

In my case, here is my experience.

```zsh
Joeys-MacBook-Pro ~ % defaults -currentHost read com.apple.screensaver
{
    CleanExit = YES;
    PrefsVersion = 100;
    idleTime = 1200;
    lastDelayTime = 1200;
    moduleDict =     {
        moduleName = iLifeSlideshows;
        path = "/System/Library/Frameworks/ScreenSaver.framework/PlugIns/iLifeSlideshows.appex";
        type = 0;
    };
    showClock = 1;
    tokenRemovalAction = 0;
}
```

I then tried reading the settings of `moduleName`: `iLifeSlideshows`, but it only has one key/value pair, indicating that the `styleKey` is `KenBurns`.

```zsh
joeyma@Joeys-MacBook-Pro ~ % defaults -currentHost read com.apple.screensaver.iLifeSlideshows
{
    styleKey = KenBurns;
}
```

Some context: 

`NSUserDefaults` is a simple way to store and retrieve preference values for an application using key-value pairs. It is often used to store user preferences for an app, such as default font size, language preference, or color scheme. However, some preferences may not be available through this interface.

`CFPreferences` is a more advanced and lower-level API that provides greater control over preferences. It allows you to access and modify preferences at a more granular level, including preferences that may not be exposed through `NSUserDefaults`.

So, in short, if you need to access a setting that is not available through `NSUserDefaults`, you may need to use the `CFPreferences` API instead.

To set the duration of each slide to 10 seconds, I tried the following, but it _does not work._

```zsh
defaults write com.apple.screensaver 'slideDuration' -float 10
```

To apply the changes, enter the following command:

```zsh
killall cfprefsd
```

This will restart the preferences daemon, which will cause the changes to take effect.

_This does not work._

Note: 

Not all screen savers may support this feature, and some may have different preferences available. You can check the available preferences for a particular screen saver by using the following command:

```zsh
defaults read /Library/Preferences/com.apple.screensaver.<module-name>
```

Replace `<module-name>` with the name of the screen saver module you want to check, without the ".plist" extension. This will display a list of preferences for that screen saver module, which you can modify using the defaults write command as described above.

#### References: 
- [Change screensaver slide duration](http://hints.macworld.com/article.php?story=20130215183522445) seemed to have a working solution since of February 18, 2013, but it stopped working at some point.
- [Ask Different](https://apple.stackexchange.com/questions/135766/os-x-mavericks-screensaver-changes-pictures-too-quickly-how-do-i-slow-it-down) seemed to have a working solution since of February 18, 2013, but stopped working at some point.
- [Programmatically change screen saver settings](https://stackoverflow.com/questions/28789120/programmatically-change-screen-saver-settings)

[onedrive-issue]:https://answers.microsoft.com/en-us/msoffice/forum/all/onedrive-creates-an-alias-on-mac-by-default-under/1c88cfaf-a99a-43ae-bb5d-dbd3a9913771?page=1
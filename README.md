# Munchkin
## Getting Started
If you want to access the live demo, you can do so [here](https://goofy-perlman-0e5a71.netlify.app/). There are no requirements before using so if you're in the vicinity of Ponce City Market in the ATL, you get a handy, dandy tool to help with your sustenance decision making. Otherwise, it's a cool exercise in making you hungry or thirsty.

If you want to snag this little bad boy for yourself, fork and clone the repo and get going! It's well commented (in my opinion) so should be easy enough to get your head around.

If, additionally, you are one of my wee target users, data.json is your friend. Once you've updated the object, submit your pull request and I'll get it merged if everything's all good!

## Overview
Munchkin is a fun little web app that allows users to whittle down a list of lunch options to a single suggestion based on their preferences at the time of use.

It was initially created for friends - two sisters who happen to work in the same office - as a way of making lunch selection more fun than using the spreadsheet based system previously in place. The name - Munchkin - reflects this, being made up of Munch (cause I'm Scottish and why say eat when you can say munch) and Kin (cause kin is family).

I know.

**Too cute.**

The idea was to create something in which the data structure being used could be a sort of living document and grow with their experiences and tastes while maintaining functionality throughout.

Apologies if I don't cover something you want to know below. Reach out to me if that's the case and I'll get you an answer in jig time.

## Development
Decisions around the tech to be used in the application was fairly straight forward. The decision to use React was easy enough, given the obvious benefits of state being able to assist with conditionally rendering questions and options, particularly when `questionIndex` is so central to the user flow. 

Additionally, I chose to use vanilla CSS rather than a pre-processor for the purpose of speed, although the lack of mixins is something I lamented throughout the process, as indicated by my commit messages.

## Design
From a design perspective, as someone who is admittedly inexperienced and lacking possession of natural UX or design talent, I wanted to make it as simple as possible. The thought process was, essentially:

* Hope (one of said sisters) loves green, let's make it green
* Everyone like centered stuff
* Don't overreach and make it terrible

In my opinion, this led to a functional and "not-ugly" looking app. In the words of Borat Sagdiyev, "Great Success"! 

Yes, it's only written for a modern iPhone (or equivalent) screen, but it's written for two specific people...

...okay, okay, I'll make it responsive!

There were definitely some cool little tricks used along the way - e.g. taking a ***very*** grey and white background image and using one of the greens in my palette as a background-color over the top of this, with opacity set to 0.1 to provide a tint to the app - however, with this being the first project worked on since returning from injury, I'm likely to spend some more time working on my design chops going forward given the struggles I face in this area!

For those of you who are interested, the background used on this site can be found [here](https://www.toptal.com/designers/subtlepatterns/funky-lines/). Toptal has some great stuff and I've recommended them to students and peers alike over the last few years.

## Data
The initial data structure I was given was a spreadsheet and, if you've looked at `data.json`, you probably have an idea of what it looked like. While some changes were made - no matter what you tell me, I refuse to include "subtle" as a value on flavorType - my goal was to remain as close to these initial values as possible, with only a couple of changes being made.

The decision to use a JSON object came about for two main reasons:

* Ease of use for people with limited technical knowledge, i.e. if you know Python (as one of my target users ***definitely*** does) it's just lists and dictionaries and should be fairly familiar.
* Ease of scalability. As stated earlier, I wanted an app that could grow without breaking changes coming from additional data being added.

In addition, being able to have questions which corresponded directly to the items and items' fields seemed to be the easiest way to handle user flow (again scalability) and meant that having an index which incremented with user choice allowed for a ~~relatively~~ seamless user flow.

## Future Updates
At this point, it's very much a case of tidying up some styling and incorporating some additional little flairs into the CSS, however, I do have a few ideas as to potential updates.

* When selecting a flavorType, it may be helfpul for a user to be able to select multiple options (e.g. maybe they're craving a rice dish and would be open to both Chinese and Japanese cuisines).
* Offering a truly random experience at the click of a button, although this does fly in the face of the app's initial purpose.
* Displaying multiple options once the selection aspect of the user flow is completed, if multiple options are available. This would probably mean implementing some form of carousel, as opposed to jamming up the screen with a bunch of text.
* You caught me, I'll make it responsive. Happy now?
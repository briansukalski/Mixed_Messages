//Greetings
const greetings = [];
greetings.push("You've been a good friend to me. That means something");
greetings.push("You're someone who can get things done. I like that.");
greetings.push("Good to see you again, friend.");
greetings.push("Good to see you. Finally someone useful is around.");
greetings.push("Friends like you are hard to find and very valuable to me.");
greetings.push("Divines bless you! May the ground you walk quake as you pass.");
greetings.push("Azura's wisdom to you, friend.");
greetings.push("My favorite drinking buddy! Let's go get some mead.");
greetings.push("Divines smile on you, friend.");
greetings.push("These sands are cold, but Khajiit feels warmness from your presence.");
greetings.push("You're not as dumb as you look.");
greetings.push("Good to see Skyrim still has such fine people. You give an old man hope.");
greetings.push("You and me, we're the only people around who aren't complete fools.");
greetings.push("It's a fine day with you around.");
greetings.push("Oh, it's you. I was wondering why I was smelling something unpleasant.");
greetings.push("I should bash your face in after all you've done.");
greetings.push("You. What do you want?");
greetings.push("I hope the wilds claim you, one of these days.");
greetings.push("The gods know what you've done.");
greetings.push("You're nothing but trouble.");
greetings.push("Honored to see you again, my Thane.");
greetings.push("Guard might get nervous, a man approaches with his weapon drawn.");
greetings.push("Hail, Companion.");

//General comments
const remarks = [];
remarks.push("You're not supposed to be in here.");
remarks.push("Hey, watch it!");
remarks.push("Keep your hands to yourself.");
remarks.push("It's locked for a reason.");
remarks.push("Careful with that fire!");
remarks.push("You might consider putting on... something. Anything.");
remarks.push("What... hey! That felt good.");
remarks.push("You must be one of those wizards. From the College in Winterhold.");
remarks.push("By Ysmir! There's a killer about.");
remarks.push("Do your worst!");
remarks.push("Victory is yours! I submit!");
remarks.push("Come on in. We got warm food, warm drinks, and warm beds.");
remarks.push("By the gods... I don't even know what to say...");
remarks.push("How high the mountains of Skyrim rise!");
remarks.push("I am your sword and your shield.");
remarks.push("I am sworn to carry your burdens.");
remarks.push("Disrepect the law, and you disrespect me.");
remarks.push("No lollygaggin'.");
remarks.push("I used to be an adventurer like you. Then I took an arrow in the knee.");
remarks.push("Watch the skies, traveller.");
remarks.push("Let me guess... someone stole your sweetroll.");
remarks.push("Whoa, whoa, whoa! Watch the magic!");
remarks.push("The Thu'um! He summons the Thu'um!");
remarks.push("I need to ask you to stop. That... shouting... is making people nervous.");
remarks.push("Heard about you and your honeyed words...");
remarks.push("Lightly armored means light on your feet. Smart.");
remarks.push("The gods gave you two hands, and you use them both for your weapon. I can respect that.");
remarks.push("You... you're the Harbinger. Of the Companions. It is my honor to stand before you.");
remarks.push("Psst. Hey, I know who you are. Hail Sithis!");
remarks.push("You know, I could have gone into that Sanctuary, killed all those Dark Brotherhood types. But I was... sick that day.");
remarks.push("Ain't no doubt about it. The Thieves Guild is back, and they've got Riften in their grip.");
remarks.push("These vampires are becoming a real menace.");
remarks.push("Some may call this junk. Me, I call them treasures.");
remarks.push("Hmph. I had you figured for a mage. I think you'll appreciate this...");

//Questions
const questions = [];
questions.push("What is it? Dragons?");
questions.push("Staying out of trouble, kinsman?");
questions.push("Best offense is a good defense, am I right?");
questions.push("Don't suppose you'd enchant my sword? Dull old blade can barely cut butter.");
questions.push("You couldn't possibly be the Dragonborn of legend. Could you?");
questions.push("Don't go setting the place on fire, okay?");
questions.push("A healing spell? Are you a priest?");
questions.push("By the gods, is that the voice?");
questions.push("Ah, so you're an alchemist, then?");
questions.push("Looking to protect yourself, or deal some damage?");
questions.push("What do you need, my Thane?");
questions.push("Now why would I want to talk to you?");
questions.push("What do you want, milk drinker?");

//Puts the three arrays together into one array to be imported in the random_chat.js file
const allDialogue = [greetings, remarks, questions];

module.exports = {allDialogue};

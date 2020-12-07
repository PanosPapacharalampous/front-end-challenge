<p align="center"><img src="https://raw.githubusercontent.com/htb-skill-test/frontend/master/images/front-end-challenge.png"></p>

## Description

> Welcome to the [**Hack The Box**](http://hackthebox.eu) front-end challenge! 

Your goal is to create a minimalist [**Steam Store**](https://store.steampowered.com/) platform clone following the specifications and requirements down below.

## Specifications and requirements.

- The project must be a `Single Page Application`
- Pick your best framework. Such as `Angular`, `React` or `Vue`
- Use [**Steam**](https://store.steampowered.com) store **clone/fake API**. ([API Overview](https://htb-steam-api.vercel.app)) made by HTB team.
- `Responsive CSS` is a bonus. You're free to pick any CSS framework you'd like to
- Follow **Steam** color scheme or very similar is a bonus

## Features

#### 1. List of games for each tab
| New and Trending | Top Sellers | What's Being Played | Upcoming |
|------------------|-------------|---------------------|----------|

##### :bulb: Example:
![](https://raw.githubusercontent.com/htb-interview/front-end-challenge/master/images/tabs-game-list.png)
> As they're displayed in [`/games`](https://store.steampowered.com/games/)

##### :bookmark_tabs: To do:
- [ ] List **10 games** for each tab *(pagination is not required)*
- [ ] Replace `Results exclude some products based on your preferences` by an `input` to `filter` games on each tab
- [ ] Display data retrieved by `API` as the example image above

    | Game Image | Compatible OS | Discount | Price |
    |------------|---------------|----------|-------|

#### 2. Game information page
Once the user clicks in a game from the game list redirects to this page

##### :bulb: Example:
![](https://raw.githubusercontent.com/htb-interview/front-end-challenge/master/images/game-information-page.png)
> As displayed in [`/app/413150`](https://store.steampowered.com/app/413150).

##### :bookmark_tabs: To do:
- [ ] Add a button to get back to the games list
- [ ] Add a slider with game images and videos
- [ ] Display data retrieved by `API` as the example image above

    |  Game Name  | Game Image | Game Description | Developer | Publisher |
    |-------------|------------|------------------|-----------|-----------|
    
    | Discount | Price | "Is this game relevant to you?" | About this Game |
    |----------|-------|---------------------------------|-----------------|

## How to start?

- Fork this repository
- Create your project inside `app` directory
- Make a `pull request` from your `fork` to this `repository` when you're done

## Tips
- Keep it simple to run. Just like `npm install` && `npm start`
- Make the repetitive pieces of your project as `components` :smiley:
- Search for **Steam** on [`Dribbble`](https://dribbble.com) for some inspiration

## Notes

> We are not affiliated with Valve Corporation or Steam in any way, shape, form, or fashion. 

**Copyright © Hack The Box 2020**

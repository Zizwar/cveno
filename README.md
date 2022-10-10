[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Zizwar/cveno)

# cveno
Fresh Curriculum Vitae 

## install
1- https://deno.land/#installation

2- clone: 
```sh 
git clone https://github.com/Zizwar/cveno 
```

## run
 - terminal
```sh
$ deno task start
or
$ deno run -A --watch=static/,routes/ dev.ts
or
$ deno run --allow-net --allow-read main.ts

```
 - docker 
 ```sh
$ docker build -t app . && docker run -it --init -p 1993:1993 app
```
 - cloud 
```
 ```sh
in https://dash.deno.com create a new project and then link to your version repo.
```

- change data cv 
 ```
 ./utils/db.json
```
```json
{
  "name": "Brahim BIDI",
  "mail": "mail@brah.im",
  "subName": "JavaScript ❣️",
  "aboutMe": [
    "About Ibrahim ",
    "I'm Ibrahim Bidi, the programming world is my specialty, everything related to JavaScript you will find me there, in the Frontend, Backend, on mobile and desktop, in robotics and blockchain, JavaScript has become everywhere.\nI bet on javascript 22 years ago, it was on Earth🌍 and now it's in space🚀\nJS🧡."
  ],
  "mobile": "Mobile: +212648188181",
  "mailbox": "mailbox: bidi@brah.im",
  "avatar": "/avatar/ibrahim_bidi.jpg",
  "birth": "Birth: 1979",
  "info": "Basic information",
  "nameT": "Name: Brahim BIDI",
  "links": [
    {
      "title": "github",
      "url": "https://github.com/Zizwar/",
      "icon": "fa fa-github"
    }],
      "skills": [
    {
      "name": "V8",
      "skill": [
        { "name": "DenoLand", "percent": 95 },
        { "name": "NodeJs", "percent": 90 }
      ]
    }],
  "experiences": {
    "title": "Competence experience",
    "items": [
      {
        "name": "Web page",
        "icon": "fa fa-tv",
        "experience": [
          "Work with dozens of front and rear engineers and designers to develop project experience",
          "SEO search engine optimization, Google keywords",
          "Experience developing web pages using the Bootstrap4/UIkit framework",
        ]}]}
}
```

### view demo in dash deno dev 
https://cveno.deno.dev

### import source css html 
https://github.com/Zizwar/cveno/tree/main/wendy

### Technologies
[![Made with Fresh](https://fresh.deno.dev/fresh-badge.svg)](https://fresh.deno.dev)

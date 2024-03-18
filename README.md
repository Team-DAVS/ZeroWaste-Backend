## ZeroWaste - Backend

> Problem.

The problem category is `Global Problems`. As you're aware, pollution, largely caused by plastic, is escalating daily and poses significant health and environmental risks if left unaddressed. Unfortunately, there's currently no system that allows community involvement with additional benefits.

> Our Solution.

We have created ZeroWaste, where you can download the app from the Play Store, and earn rewards for disposing of wastes in your locality from which you can earn recycled materials from our partnerships Non funded organizations. 

Here's how it works:
- Download and sign up for the app, utilizing Firebase for authentication and a microservices architecture.
- Use the in-app feature to snap a photo of your item.
- Receive an estimate of the reward points you'll earn.
- Locate a nearby disposal site.
- Dispose of it and verify, receive reward points that can be redeemed in the in-app store using your wallet.

<hr>

## 🌐 Setup Local Environment

You will have to set up Supabase project to get following api keys. Paste it in `.env.local` in root directory.

```
project_URL= <value> 
supabase_KEY= <value> 
JWT_SECRET=<value>
```

You can retrieve the above environment values by referring to their documentation. Once retrieved, paste them accordingly as mentioned above.

## ✅ Guidelines to run web app locally

- For this app to work, Use these commands to run the application

> `Fork` & `Clone` this project. 

```bash
# to install dependencies 
npm install

# to run the development server
node server.js
```

- You will get a URL, and a QR Code (for scanning in the Expo Go app) and it will automatically start in the emulator if you have set it up.

<hr>

## <img src="https://user-images.githubusercontent.com/74038190/221857984-5bf77e81-6f65-4502-a7c8-f29a978efb3f.png" alt="bullseye" width="35" /> Frameworks & Tools

<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

## 📂 Codebase Structure

A quick look at the structure of the codebase.

```
.

└── routes
    └── users.js
└── utils
    └── bcrypt.js
└── dbConnection.js
└── server.js
...

```

# Team DAVS

<table>
<td align="center" width="200"><pre><a href="https://github.com/shub3am"><img src="https://avatars.githubusercontent.com/u/77344771?v=4" width="200" alt="GitHub Profile of Shubham" /><br><sub>Shubham</sub></a><br>@shub3am</pre></td>
<td align="center" width="200"><pre><a href="https://github.com/Anmol-Baranwal"><img src="https://avatars.githubusercontent.com/u/74038190?v=4" width="200" alt="GitHub Profile of Anmol Baranwal" /><br><sub>Anmol Baranwal</sub></a><br>@Anmol-Baranwal</pre></td>
<td align="center" width="200"><pre><a href="https://github.com/Vidip-Ghosh"><img src="https://avatars.githubusercontent.com/u/91741581?v=4" width="200" alt="GitHub Profile of Vidip Ghosh" /><br><sub>Vidip Ghosh</sub></a><br>@Vidip-Ghosh</pre></td>
<td align="center" width="200"><pre><a href="https://github.com/dinxsh"><img src="https://avatars.githubusercontent.com/u/90450035?v=4" width="200" alt="GitHub Profile of Dinesh" /><br><sub>Dinesh</sub></a><br>@dinxsh</pre></td>
</table>

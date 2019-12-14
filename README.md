# Instagram-node-wrapper

This is a simply node wrapper of instagram

## Install 
```
npm i instagram-node-wrapper
```

## Usage
Basic usage
```js
const instagramWrapper = require('instagram-node-wrapper')

instagramWrapper(username).then((url)=>{
    console.log(url)
})
```
**Get all information**
```js
const instagramWrapper = require('instagram-node-wrapper')

instagramWrapper('instagram').then((url)=>{
    console.log(url)
})
/*
{ description: 'Bringing you closer to the people and things you love. ❤️',
  info: { username: 'instagram', fullName: 'Instagram' },
  follow: { followers: 321759024, following: 224 },
  link:
   { url: 'https://instagram.com/instagram',
     website:
      'https://about.instagram.com/community/programs/pressure-to-be-perfect' },
  posts:
   { number: 6156,
     post:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ] } }
*/
```
------------------------------------------
**Get image information**
```js
const instagramWrapper = require('instagram-node-wrapper')

instagramWrapper('instagram').then((url)=>{
    console.log(url.posts.post[0]) //0 equal to image do you want 
})
/*
{ url:
   'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/74842677_423371495214848_2034238600495834348_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=1&oh=af2e5ea4a9b1f7deb1feb3d37657260b&oe=5DF711CA',
  description: 'Image may contain: tree, dog, outdoor and nature',
  comment: { count: 35298 },
  like: { count: 2142811 } }*/
```


const got = require('got');
module.exports = async username => {
    if (typeof username !== 'string') {
        throw new TypeError(`Expected \`username\` to be of type \`string\` but received type \`${typeof username}\``);
    }
        const url = `https://instagram.com/${username}`;
        const {graphql: {user}} = await got(url, {searchParams: {__a: 1}}).json();



try {
    return {
        description: user.biography,
        info: {
            username: username,
            fullName: user.full_name,
        },
        follow: {
            followers: user.edge_followed_by.count,
            following: user.edge_follow.count,
        },
        link:{
            url,
            website: user.external_url
        },
        posts: {
            number: user.edge_owner_to_timeline_media.count,
            post: getImage()
        },


    };
}catch (error) {
        if (error.response.statusCode === 404) {
            error.message = `User "${username}" not found`;
        }

        throw error;
    }

    function getImage() {
        let post = [];
        let length = user.edge_owner_to_timeline_media.edges.length;
        for (i = 0; length > i; i++) {
            post.push({
                url: user.edge_owner_to_timeline_media.edges[i].node.display_url,
                description: user.edge_owner_to_timeline_media.edges[i].node.accessibility_caption,
                comment: user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_comment,
                like: user.edge_owner_to_timeline_media.edges[i].node.edge_liked_by
            })
        }
        return post
    }
};
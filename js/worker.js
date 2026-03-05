self.addEventListener("message", async function (e) {
    const videos = e.data;
    let response = [];
    const videosResponse = await Promise.all(
        videos.map(async video => {
            try {
                const response  = await this.fetch(video.url);
                const fileBlob = await response.blob();
                if (fileBlob.type === "video/mp4") {
                return URL.createObjectURL(fileBlob);
                }
            } catch (e) {
                return null;
            }
        })
    );
    videosResponse.map((vr, index) => {
        response.push({
            url: vr,
            id: videos[index].id,
            poster: videos[index].poster,
            classes: videos[index].classes,
            brandLogoSrc: videos[index].brandLogoSrc
        })
    })
    self.postMessage(response);
},
false
)
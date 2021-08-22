<template>
  <socials-panel-card-twitter></socials-panel-card-twitter>
  <socials-panel-links
    twitter-url="https://twitter.com/huskython"
    youtube-url="https://www.youtube.com/channel/UCb3LCNgQfnYhB_LGveqT3IA"
    facebook-url="https://www.facebook.com/HuskyTHON"
    instagram-url="https://www.instagram.com/huskython"
  ></socials-panel-links>
</template>

<script>
import SocialsPanelLinks from "@/components/SocialsPanelLinks";
import SocialsPanelCardTwitter from "@/components/SocialsPanelCardTwitter";
export default {
  name: "SocialsPanel",
  components: {SocialsPanelCardTwitter, SocialsPanelLinks}
}
</script>

<style scoped>

</style>

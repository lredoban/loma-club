import StoryblokClient from 'storyblok-js-client'
import { onMounted, ref } from 'vue'

const token = import.meta.env.VITE_STORYBLOK_PUBLIC_TOKEN
 
let storyapi = new StoryblokClient({
  accessToken: token
})
 
export const resolver = storyapi.richTextResolver

export default (slug, options = {}) => {
  const story = ref(null)
  const getStory = (version) => {
    storyapi.get('cdn/stories/' + slug, {
      version: version,
      ...options
    })
      .then((response) => {
        story.value = response.data.story.content
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onMounted(() => {
    const { StoryblokBridge, location } = window
    const storyblokInstance = new StoryblokBridge()
    
    storyblokInstance.on(['published', 'change'], () => {
        getStory('draft')
    })
    storyblokInstance.on('input', (event) => {
      story.value = event.story.content
    })
    storyblokInstance.on('enterEditmode', (event) => {
      getStory('draft')
    })
  })

  getStory('published')

  return { story, resolver }
}

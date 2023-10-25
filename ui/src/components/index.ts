import { type App } from 'vue'
import AppIcon from './icons/AppIcon.vue'
import AppAvatar from './app-avatar/index.vue'
import LoginLayout from './login-layout/index.vue'
import LoginContainer from './login-container/index.vue'
import LayoutContent from './content-container/LayoutContent.vue'
import TagsInput from './tags-input/index.vue'
import CardBox from './card-box/index.vue'
import CardAdd from './card-add/index.vue'



export default {
  install(app: App) {
    app.component(AppIcon.name, AppIcon)
    app.component(AppAvatar.name, AppAvatar)
    app.component(LoginLayout.name, LoginLayout)
    app.component(LoginContainer.name, LoginContainer)
    app.component(LayoutContent.name, LayoutContent)
    app.component(TagsInput.name, TagsInput)
    app.component(CardBox.name, CardBox)
    app.component(CardAdd.name, CardAdd)
  }
}

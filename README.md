# lookey_app
 an shopping app

npm install vue-cli-g

vue initial webpack-simple lookey
cd lookey
npm install
code.
npm run dev
npm install vue-router --save
npm install axios --save
npm install vuex --save
npm install moment --save



npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons 
npm install --save @fortawesome/vue-fontawesome
npm install — save @fortawesome/free-brands-svg-icons
vue add fontawesome

main.js --------



import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

html-----
 <font-awesome-icon icon="user-secret"></font-awesome-icon>
<font-awesome-icon icon="['fab', 'twitter']" size="3x" />






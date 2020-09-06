import { reactive, ref } from 'vue'
import Notifier from '@jsanahuja/notifierjs'

class SystemNoti {
  type = ref('info')
  msg = ref('Welcome')

  notifier = new Notifier({
    position: 'top-right',
    direction: 'top',
    default_time: 3000
  })

  setdata({ type = 'info', msg }) {
    this.type = type
    this.msg = msg
    this.notifier.notify(this.type, this.msg)
  }
  noti() {
    this.notifier.notify(this.type, this.msg)
  }
}

const state = reactive(new SystemNoti())
export default state
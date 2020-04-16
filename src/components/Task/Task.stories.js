import { action } from '@storybook/addon-actions'
import Task from './Task.vue'

export default {
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

export const taskData = {
  id: '1',
  title: 'Task Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2020, 0, 1, 9, 0)
}

const taskTemplate = `<Task :task="task"  @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`

// 基礎樣式
export const Default = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      type: Object,
      default: () => taskData
    }
  },
  methods: actionsData
})

// pinned state 樣式
export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      type: Object,
      default: () => ({
        ...taskData,
        state: 'TASK_PINNED'
      })
    }
  },
  methods: actionsData
})

// archived state 完成樣式
export const Archived = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      type: Object,
      default: () => ({
        ...taskData,
        state: 'TASK_ARCHIVED'
      })
    }
  },
  methods: actionsData
})

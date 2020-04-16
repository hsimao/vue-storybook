import Vue from 'vue'
import TaskList from '../../src/components/TaskList/TaskList.vue'
import { withPinnedTasksData } from '../../src/components/TaskList/TaskList.stories'
import { mount } from '@vue/test-utils'

describe('TaskList.vue', () => {
  it('renders pinned tasks at the start of the list', () => {
    const wrapper = mount(TaskList, {
      propsData: { tasks: withPinnedTasksData }
    })

    const firstTaskPinned = wrapper
      .findAll('.list-item')
      .at(0)
      .element.classList.contains('TASK_PINNED')

    // We expect the pinned task to be rendered first, not at the end
    expect(firstTaskPinned).toBe(true)
  })
})

import Vue from 'vue'
import Recipes from '@/components/Recipes'
import { shallowMount } from '@vue/test-utils'
import { RouterLinkStub } from '@vue/test-utils'

describe('Recipes.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(Recipes,  {
    	 stubs: {
         RouterLink: RouterLinkStub
     }
    })
    expect(wrapper.vm.$el.querySelector('h2').textContent)
      .toEqual('Recipes')
  })
})

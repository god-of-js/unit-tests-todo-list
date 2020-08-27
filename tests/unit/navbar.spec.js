import { shallowMount } from "@vue/test-utils";
import {expect} from 'chai'
import navbar from '@/components/nav.vue'
describe('todolist.vue',async () => {
    const wrapper = shallowMount(navbar);
    it('should be named navbar', () => {
        expect(wrapper.name()).to.be('navbar')
    })
    await wrapper.setData({name: 'Henry Eze'})
    
 it('name property of data to be Henry Eze', () => {
    expect(wrapper.vm.name).to.be('Henry Eze')
})
})
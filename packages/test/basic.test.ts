import {assert,describe,expect,it} from 'vitest'
import {sayHelloC} from 'package-c'

// 测试依赖是否正常8
describe('',()=>{
  it('test',()=>{
    sayHelloC()
  })
})

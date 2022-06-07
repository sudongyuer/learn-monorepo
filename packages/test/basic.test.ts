import {assert,describe,expect,it} from 'vitest'
import {sayHelloC} from 'package-c'

// 测试依赖是否正常4
describe('',()=>{
  it('test',()=>{
    sayHelloC()
  })
})

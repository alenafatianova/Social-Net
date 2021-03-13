import React from 'react'
import { create } from 'react-test-renderer'
import { Paginator } from '../components/common/Paginator/Paginator'

describe('Paginator component', () => {
    test('pagesCount is 11 but should be 10 only', () => {
        const component = create(<Paginator 
                pageSize={1} totalItemsCount={11} currentPage={1} onPageChanged={() => {}} portionSize={10}/>)
        const root = component.root
        const pagesCount = root.findAllByType('span') 
        expect(pagesCount.length).toBe(10)   
    })
   test('if pages count is more then 10 button NEXT should be present', () => {
       const component = create(<Paginator pageSize={1} totalItemsCount={11} currentPage={1} onPageChanged={() => {}} portionSize={10}/>)
       const root = component.root
       const button = root.findAllByType('button')
       expect(button.length).toBe(1) 
   })
})
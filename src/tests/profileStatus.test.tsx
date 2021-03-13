import  React from 'react'
import { create } from 'react-test-renderer'
import { ProfileStatus } from '../components/Profile/ProfileStatus/ProfileStatus'

describe ('ProfileStatus component', () => {
    test('status should be shown in the state', () => {
        const component = create(<ProfileStatus status={'new status'} updateStatus={() => {}}/>)
        const root = component.root;
        expect(root.props.status).toBe('new status') 
    }),
    test('span should be shown', () => {
        const component = create(<ProfileStatus status={'hello'} updateStatus={() => {}}/>)
        const root = component.root;
        const span = root.findByType('span')
        expect(span).not.toBeNull() 
    }),
    test('after creation <input> should not be displayed', () => {
        const component = create(<ProfileStatus status={'hello'} updateStatus={() => {}}/>)
        const root = component.root;
        expect(() => {
            const input = root.findByType('input')
        }).toThrow() 
    }),
    test('after creation <span> should show the right text', () => {
        const component = create(<ProfileStatus status={'hello'} updateStatus={() => {}}/>)
        const root = component.root;
        const span = root.findByType('span')
        expect(span.children[0]).toBe('hello') 
    }),
    test('<input> should be displayed in editMode instead of <span>', () => {
        const component = create(<ProfileStatus status={'hello'} updateStatus={() => {}}/>)
        const root = component.root;
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect(input.props.value).toBe('hello') 
    })
})
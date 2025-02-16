# React useEffect Cleanup Issue

This repository demonstrates a subtle bug related to the `useEffect` hook's cleanup function in React.  Specifically, the cleanup function might not be called when a component is removed from the DOM due to a parent component's re-render. This can lead to memory leaks if the cleanup function is responsible for releasing resources like timers, subscriptions, or event listeners.

## Bug Description
The issue occurs when a child component using `useEffect` is unmounted because its parent re-renders. The cleanup function within the `useEffect` hook, designed to release resources before unmounting, isn't reliably executed in this scenario.

## Solution
The solution involves carefully managing component lifecycles and ensuring that resources are properly released. In certain cases, using a `useRef` in conjunction with `useEffect` or adjusting the parent's re-render logic might resolve the issue.
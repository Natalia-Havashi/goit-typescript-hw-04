import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

Створіть загальну функцію getProperty яка приймає обєкт та ключ як рядок
Функція повинна повертати значення цього ключа з обєкта.

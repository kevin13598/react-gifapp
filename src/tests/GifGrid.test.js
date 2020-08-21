import {shallow} from 'enzyme'
import { GifGrid } from '../components/GifGrid';
import '@testing-library/jest-dom';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs');

describe('Pruebas de <GifGrid/>', () =>{
    
    const category = 'One Punch Man';

    test('Debe de mostrar el componente correctamente.', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        })

        const wrapper = shallow(<GifGrid category = {category}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [
        {
            id: 'abc',
            url: 'https://localhost/cualquiercosa/fd.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: 'abcd',
            url: 'https://localhost/cualquiercosa/fd.jpg',
            title: 'Cualquier cosa 2'
        }
    ];
        
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category = {category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


    })
    

});
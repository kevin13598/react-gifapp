import {shallow} from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';
import React from 'react';
import '@testing-library/jest-dom';

describe('Pruebas para el componente GifGridItem', () =>{

    const title = 'Un titulo';
    const url = 'https://localhosst/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe de mostrar el componente correctamente', ()=>{

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        /* const c = 'card animate__animated animate__fadeIn';
        expect(div.prop('className')).toBe(c); */

        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
    
    

});
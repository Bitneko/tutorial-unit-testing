import React from 'react';
import {Gists, GistList} from './Gists';
import {act} from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';

describe('Gists', () => {
  const mockGists = [
    {
      id: 1,
      html_url: 'http://example1.com',
      description: 'foobar',
    },
    {
      id: 2,
      html_url: 'http://example2.com',
      description: 'baxz',
    }
  ]

  describe('Gists component', () => {
    let component;

    beforeAll(() => {
      const mockJsonPromise = Promise.resolve(mockGists);
      const mockFetchPromise = Promise.resolve({
        ok: true,
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    });

    test('should mount component with loading text', async () => {
      component = mount(<Gists />);

      const gists = component.find('#gistList');
      expect(gists.text()).toBe('...Loading Gists');

      await act(async () => {
        await component.update();
      });

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/gists');
      global.fetch.mockClear();
    });

    test('should mount component with loaded data', () => {
      act(() => {
        component.update();
      });

      const gistsList = component.find(GistList);
      expect(gistsList.props().gists).toEqual(mockGists);
    });
  }),

  describe('GistList', () => {
    test('should render a list of gists', () => {
      
      const shallowComponent = shallow(<GistList gists={mockGists}/>);
      const gists = shallowComponent.find('li');
  
      expect(gists).toHaveLength(2);
    });
  });
});
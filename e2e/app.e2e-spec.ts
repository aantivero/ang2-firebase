import { Ang2FirebasePage } from './app.po';

describe('ang2-firebase App', () => {
  let page: Ang2FirebasePage;

  beforeEach(() => {
    page = new Ang2FirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

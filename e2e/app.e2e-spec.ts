import { LadyleetMaterial2Page } from './app.po';

describe('ladyleet-material2 App', function() {
  let page: LadyleetMaterial2Page;

  beforeEach(() => {
    page = new LadyleetMaterial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

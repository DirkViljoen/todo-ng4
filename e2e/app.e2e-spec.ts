import { TodoNg4Page } from './app.po';

describe('todo-ng4 App', () => {
  let page: TodoNg4Page;

  beforeEach(() => {
    page = new TodoNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

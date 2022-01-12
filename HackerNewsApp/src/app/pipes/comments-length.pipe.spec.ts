import { CommentsLengthPipe } from './comments-length.pipe';

describe('CommentsLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new CommentsLengthPipe();
    expect(pipe).toBeTruthy();
  });
});

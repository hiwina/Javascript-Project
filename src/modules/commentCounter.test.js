import { commentsListNum } from './commentCounter';

jest.mock('./commentCounter', () => ({
  getData: jest.fn(),
}));

describe('commentsListNum', () => {
  it('should update the commentNum element with the length of numComments array', async () => {
    const mockGetData = jest.fn().mockResolvedValue([1, 2, 3]);
    jest.mock('./commentCounter', () => ({
      getData: mockGetData,
    }));

    const commentNum = document.createElement('div');
    commentNum.classList.add('comment-num');
    document.body.appendChild(commentNum);

    await commentsListNum('exampleId');

    expect(commentNum.innerHTML).toBe('3');
  });

  it('should update the commentNum element with "0"', async () => {

    const mockGetData = jest.fn().mockResolvedValue(null);
    jest.mock('./commentCounter', () => ({
      getData: mockGetData,
    }));

    const commentNum = document.createElement('div');
    commentNum.classList.add('comment-num');
    document.body.appendChild(commentNum);

    await commentsListNum('exampleId');

    expect(commentNum.innerHTML).toBe('0');
  });
});

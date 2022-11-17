const jobScheduler = require('./solution');

describe('jobScheduler', () => {
  it('should execute job after delay', () => {
    const job = jest.fn();
    jobScheduler(job, 1000);
    setTimeout(() => {
      expect(job).toHaveBeenCalled();
    }, 1000);
  });
});

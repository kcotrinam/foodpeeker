import * as actions from '../actions/actions';

describe('Evaluate categories actions', () => {
  test('categoryRequest should not return an empty action type', () => {
    const action = actions.categoryRequest();
    expect(action.type).not.toBe('');
  });

  test('categoryRequest should return the correct action type', () => {
    const action = actions.categoryRequest();
    expect(action.type).toBe('FETCH_CATEGORIES_REQUEST');
  });

  test('categorySuccess should not return an empty action type', () => {
    const action = actions.categorySuccess();
    expect(action.type).not.toBe('');
  });

  test('categorySuccess should return the correct action type', () => {
    const action = actions.categorySuccess();
    expect(action.type).toBe('FETCH_CATEGORIES_SUCCESS');
  });

  test('categoryFailure should not return an empty action type', () => {
    const action = actions.categoryFailure();
    expect(action.type).not.toBe('');
  });

  test('categoryFailure should return the correct action type', () => {
    const action = actions.categoryFailure();
    expect(action.type).toBe('FETCH_CATEGORIES_FAILURE');
  });
});

describe('Evaluate country actions', () => {
  test('countryRequest should not return an empty action type', () => {
    const action = actions.countryRequest();
    expect(action.type).not.toBe('');
  });

  test('countryRequest should return the correct action type', () => {
    const action = actions.countryRequest();
    expect(action.type).toBe('FETCH_COUNTRIES_REQUEST');
  });

  test('countrySuccess should not return an empty action type', () => {
    const action = actions.countrySuccess();
    expect(action.type).not.toBe('');
  });

  test('countrySuccess should return the correct action type', () => {
    const action = actions.countrySuccess();
    expect(action.type).toBe('FETCH_COUNTRIES_SUCCESS');
  });

  test('countryFailure should not return an empty action type', () => {
    const action = actions.countryFailure();
    expect(action.type).not.toBe('');
  });

  test('countryFailure should return the correct action type', () => {
    const action = actions.countryFailure();
    expect(action.type).toBe('FETCH_COUNTRIES_FAILURE');
  });
});

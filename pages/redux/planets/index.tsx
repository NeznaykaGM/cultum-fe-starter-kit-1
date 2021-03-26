import * as React from 'react';
// view components
import { Planets } from '@md-sw-redux/planets';
import { MainLayout } from '@md-shared/layouts/main';
// store
import { initializeStore } from 'lib/redux/initStore';
// types
import * as API from '@md-store/modules/api';
import { ThunkDispatch } from '@md-store/helpers';

const PlanetsPage = () => (
  <MainLayout>
    <Planets />
  </MainLayout>
);

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const dispatch = reduxStore.dispatch as ThunkDispatch;

  await dispatch(API.planets.performAPIGetPlanets());

  return { props: { initialReduxState: reduxStore.getState() } };
}

export default PlanetsPage;

# Preface

This repo contains the implementation of qiscus multichannel sdk UI for angular.

## Steps
- Declare `qismo` global variable, see `src/typings.d.ts`
- Initiate Qiscus inside `ngAfterViewInit`, see `src/home/home.component.ts`
- Destroy `qismo` variables and elements when we change page inside `ngOnDestroy`, see `src/home/home.component.ts`
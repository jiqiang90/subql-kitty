// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { U8aFixed, u32 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name Address */
export interface Address extends AccountId {}

/** @name Kitty */
export interface Kitty extends U8aFixed {}

/** @name KittyIndex */
export interface KittyIndex extends u32 {}

/** @name LookupSource */
export interface LookupSource extends AccountId {}

export type PHANTOM_KITTIES = 'kitties';

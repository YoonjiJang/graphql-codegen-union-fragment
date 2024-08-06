import * as Types from '../types';

export type UiNodeFragment_ImageUiNode = { __typename?: 'ImageUINode', id: string, url?: string | null };

export type UiNodeFragment_TextUiNode = { __typename?: 'TextUINode', id: string, content?: string | null };

export type UiNodeFragment = UiNodeFragment_ImageUiNode | UiNodeFragment_TextUiNode;

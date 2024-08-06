import * as Types from '../types';

import { UiNodeFragment_ImageUiNode_, UiNodeFragment_TextUiNode_ } from '../fragments/ui-node-fragment';
export type UiNodesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UiNodesQuery = { __typename?: 'Query', uiNodes?: Array<(
    { __typename?: 'ImageUINode' }
    & UiNodeFragment_ImageUiNode
  ) | (
    { __typename?: 'TextUINode' }
    & UiNodeFragment_TextUiNode
  ) | null> | null };

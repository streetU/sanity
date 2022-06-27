// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import post from './post'
import page from './page'
import author from './author'

import category from './category'
import provider from './provider'
import game from './game'
import user from './user'
import wallet from './wallet'
import site_config from './site_config'
import externalauth from "./externalauth"
import session from './session'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    
    // post,
    // author,
    category,
    blockContent,
    site_config,
    game,
    user,
    wallet,
    provider,
    externalauth,
    session,
    post
  ])
})

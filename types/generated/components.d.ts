import type { Schema, Struct } from '@strapi/strapi';

export interface FirstComponentDefaultSeo extends Struct.ComponentSchema {
  collectionName: 'components_first_component_default_seos';
  info: {
    displayName: 'DefaultSeo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    shareImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    twitterDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    twitterImage: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    twitterTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
  };
}

export interface FirstComponentSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_first_component_social_links';
  info: {
    description: '';
    displayName: 'SocialLinks';
  };
  attributes: {
    facebookUrl: Schema.Attribute.String & Schema.Attribute.Required;
    instagramUrl: Schema.Attribute.String & Schema.Attribute.Required;
    tiktokUrl: Schema.Attribute.String & Schema.Attribute.Required;
    twitterUrl: Schema.Attribute.String & Schema.Attribute.Required;
    whatsappUrl: Schema.Attribute.String & Schema.Attribute.Required;
    youtubeUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'first-component.default-seo': FirstComponentDefaultSeo;
      'first-component.social-links': FirstComponentSocialLinks;
    }
  }
}

import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FirstComponentDefaultSeo extends Struct.ComponentSchema {
  collectionName: 'components_first_component_default_seos';
  info: {
    description: '';
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
    whatsappUrl: Schema.Attribute.String & Schema.Attribute.Required;
    youtubeUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayaoutMainSection extends Struct.ComponentSchema {
  collectionName: 'components_layaout_main_sections';
  info: {
    description: '';
    displayName: 'mainSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'component.link', true>;
    subHeading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.link': ComponentLink;
      'first-component.default-seo': FirstComponentDefaultSeo;
      'first-component.social-links': FirstComponentSocialLinks;
      'layaout.main-section': LayaoutMainSection;
    }
  }
}

import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentFeature extends Struct.ComponentSchema {
  collectionName: 'components_component_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['MISION_ICON', 'VALORES_ICON', 'VISION_ICON']
    >;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentGallery extends Struct.ComponentSchema {
  collectionName: 'components_component_galleries';
  info: {
    description: '';
    displayName: 'gallery';
  };
  attributes: {
    nameImage: Schema.Attribute.String;
    sliderImageProjects: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentLinkCompleteService extends Struct.ComponentSchema {
  collectionName: 'components_component_link_complete_services';
  info: {
    description: '';
    displayName: 'linkCompleteService';
  };
  attributes: {
    heading: Schema.Attribute.String;
    imageVideos: Schema.Attribute.Media<'files' | 'images'>;
    subHeading: Schema.Attribute.Text;
    videoLink: Schema.Attribute.Component<'component.link', false>;
  };
}

export interface ComponentLinkProjects extends Struct.ComponentSchema {
  collectionName: 'components_component_link_projects';
  info: {
    description: '';
    displayName: 'LinkProjects';
  };
  attributes: {
    heading: Schema.Attribute.String;
    imageProject: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linkGallery: Schema.Attribute.Component<'component.gallery', true>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentLinkSilder extends Struct.ComponentSchema {
  collectionName: 'components_component_link_silders';
  info: {
    description: '';
    displayName: 'linkService';
  };
  attributes: {
    Gallery: Schema.Attribute.Component<'component.gallery', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentSlider extends Struct.ComponentSchema {
  collectionName: 'components_component_sliders';
  info: {
    description: '';
    displayName: 'Slider';
  };
  attributes: {
    description: Schema.Attribute.Text;
    slider: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface LayaoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layaout_features_sections';
  info: {
    description: '';
    displayName: 'featuresSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'component.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayaoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layaout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    address: Schema.Attribute.Text;
    linkAddress: Schema.Attribute.Text;
    socialLink: Schema.Attribute.Component<'component.link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayaoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layaout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'component.link', false>;
    imageIco: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.Component<'component.link', true>;
  };
}

export interface LayaoutProjects extends Struct.ComponentSchema {
  collectionName: 'components_layaout_projects';
  info: {
    description: '';
    displayName: 'Projects';
  };
  attributes: {
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'component.link-projects', true>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayaoutSeo extends Struct.ComponentSchema {
  collectionName: 'components_layaout_seos';
  info: {
    description: '';
    displayName: 'Seo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Slider: Schema.Attribute.Component<'component.slider', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayaoutServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_layaout_services_sections';
  info: {
    description: '';
    displayName: 'servicesSection';
  };
  attributes: {
    imageContact: Schema.Attribute.Media<'images'>;
    imageProject: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imageService: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'component.link-silder', true>;
    linkCompleteService: Schema.Attribute.Component<
      'component.link-complete-service',
      true
    >;
    mainHeading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.feature': ComponentFeature;
      'component.gallery': ComponentGallery;
      'component.link': ComponentLink;
      'component.link-complete-service': ComponentLinkCompleteService;
      'component.link-projects': ComponentLinkProjects;
      'component.link-silder': ComponentLinkSilder;
      'component.slider': ComponentSlider;
      'layaout.features-section': LayaoutFeaturesSection;
      'layaout.footer': LayaoutFooter;
      'layaout.header': LayaoutHeader;
      'layaout.projects': LayaoutProjects;
      'layaout.seo': LayaoutSeo;
      'layaout.services-section': LayaoutServicesSection;
    }
  }
}

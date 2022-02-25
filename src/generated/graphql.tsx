import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  RawObject: any;
  Upload: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Int'];
  id: Scalars['ID'];
  refreshToken: Scalars['String'];
  tokenType: Scalars['String'];
};

export enum ActivityType {
  Bookmark = 'bookmark',
  Like = 'like',
  Watch = 'watch'
}

export type ArticleAd = {
  __typename?: 'ArticleAd';
  type?: Maybe<ArticleSectionType>;
  url?: Maybe<Scalars['String']>;
};

export type ArticleBanner = {
  __typename?: 'ArticleBanner';
  image?: Maybe<Image>;
  type?: Maybe<ArticleSectionType>;
  url?: Maybe<Scalars['String']>;
};

export type ArticleCover = {
  __typename?: 'ArticleCover';
  landscapeImage?: Maybe<Image>;
  portraitImage?: Maybe<Image>;
};

export type ArticleEvent = {
  __typename?: 'ArticleEvent';
  content?: Maybe<Scalars['String']>;
  onrewindId: Scalars['ID'];
  type?: Maybe<ArticleSectionType>;
};

export type ArticleGallery = {
  __typename?: 'ArticleGallery';
  images?: Maybe<Array<Maybe<Image>>>;
  type?: Maybe<ArticleSectionType>;
};

export type ArticleSection = ArticleAd | ArticleBanner | ArticleEvent | ArticleGallery | ArticleText | ArticleTitle | ArticleVideo;

export enum ArticleSectionType {
  ArticleAd = 'article_ad',
  ArticleBanner = 'article_banner',
  ArticleEvent = 'article_event',
  ArticleGallery = 'article_gallery',
  ArticleText = 'article_text',
  ArticleTitle = 'article_title',
  ArticleVideo = 'article_video'
}

export type ArticleText = {
  __typename?: 'ArticleText';
  content?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleSectionType>;
};

export type ArticleTitle = {
  __typename?: 'ArticleTitle';
  content?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleSectionType>;
};

export type ArticleVideo = {
  __typename?: 'ArticleVideo';
  image?: Maybe<Image>;
  onrewindId: Scalars['ID'];
  type?: Maybe<ArticleSectionType>;
  url?: Maybe<Scalars['String']>;
};

export type CmsPage = {
  __typename?: 'CMSPage';
  codename?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<CmsPageSection>>>;
  params?: Maybe<CmsPageParams>;
  type?: Maybe<Scalars['String']>;
};

export type CmsPageMetadata = {
  __typename?: 'CMSPageMetadata';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  title?: Maybe<Scalars['String']>;
};

export type CmsPageParams = CmsPageVerticalLayoutParams;

export type CmsPageSection = {
  __typename?: 'CMSPageSection';
  sectionCodename?: Maybe<Scalars['String']>;
  sectionItemsDisplayType?: Maybe<Scalars['String']>;
  sectionNumberOfAdditionalFilters?: Maybe<Scalars['String']>;
  sectionNumberOfItems?: Maybe<Scalars['String']>;
  sectionRatio?: Maybe<Scalars['String']>;
  sectionType?: Maybe<Scalars['String']>;
};

export type CmsPageVerticalLayoutParams = {
  __typename?: 'CMSPageVerticalLayoutParams';
  meta?: Maybe<CmsPageMetadata>;
  title?: Maybe<Scalars['String']>;
};

export type CmsSectionCustom = {
  __typename?: 'CMSSectionCustom';
  codename?: Maybe<Scalars['String']>;
  params?: Maybe<CmsSectionCustomParams>;
  type?: Maybe<Scalars['String']>;
};

export type CmsSectionCustomParams = CmsSectionCustomTextParams | CmsSectionCustomTitleParams;

export type CmsSectionCustomTextParams = {
  __typename?: 'CMSSectionCustomTextParams';
  text?: Maybe<Scalars['String']>;
};

export type CmsSectionCustomTitleParams = {
  __typename?: 'CMSSectionCustomTitleParams';
  horizontalPosition?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type CmsSectionDynamic = {
  __typename?: 'CMSSectionDynamic';
  codename?: Maybe<Scalars['String']>;
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<CmsSectionItem>>>;
  params?: Maybe<CmsSectionDynamicParams>;
  type?: Maybe<Scalars['String']>;
};

export type CmsSectionDynamicGridParams = {
  __typename?: 'CMSSectionDynamicGridParams';
  additionalFilters?: Maybe<Array<Maybe<CmsSectionFilters>>>;
  buttonRedirect?: Maybe<Scalars['String']>;
  buttonType?: Maybe<Scalars['String']>;
  itemsType: CmsSectionItemType;
  numberOfItems?: Maybe<Scalars['Int']>;
  sectionFilters?: Maybe<Array<Maybe<CmsSectionFilters>>>;
  title?: Maybe<Scalars['String']>;
};

export type CmsSectionDynamicParams = CmsSectionDynamicGridParams;

export type CmsSectionFilters = {
  __typename?: 'CMSSectionFilters';
  displayValue?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CmsSectionItem = CmsSectionItemEvent | CmsSectionItemFile | CmsSectionItemImage | CmsSectionItemVideo;

export type CmsSectionItemEvent = {
  __typename?: 'CMSSectionItemEvent';
  _id?: Maybe<Scalars['String']>;
  item?: Maybe<Event>;
  meta?: Maybe<Scalars['RawObject']>;
  type?: Maybe<CmsSectionItemType>;
};

export type CmsSectionItemFile = {
  __typename?: 'CMSSectionItemFile';
  _id?: Maybe<Scalars['String']>;
  item?: Maybe<File>;
  meta?: Maybe<Scalars['RawObject']>;
  type?: Maybe<CmsSectionItemType>;
};

export type CmsSectionItemImage = {
  __typename?: 'CMSSectionItemImage';
  _id?: Maybe<Scalars['String']>;
  item?: Maybe<Image>;
  type?: Maybe<CmsSectionItemType>;
};

export enum CmsSectionItemType {
  Event = 'event',
  File = 'file',
  Image = 'image',
  Video = 'video'
}

export type CmsSectionItemVideo = {
  __typename?: 'CMSSectionItemVideo';
  _id?: Maybe<Scalars['String']>;
  item?: Maybe<Video>;
  meta?: Maybe<Scalars['RawObject']>;
  type?: Maybe<CmsSectionItemType>;
};

export enum CmsSectionItemsDisplayType {
  Landscape = 'landscape',
  Portrait = 'portrait'
}

export type CmsSectionStatic = {
  __typename?: 'CMSSectionStatic';
  codename?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<CmsSectionItem>>>;
  params?: Maybe<CmsSectionStaticParams>;
  type?: Maybe<Scalars['String']>;
};

export type CmsSectionStaticAccordionParams = {
  __typename?: 'CMSSectionStaticAccordionParams';
  ratio?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CmsSectionStaticAdParams = {
  __typename?: 'CMSSectionStaticAdParams';
  ratio?: Maybe<Scalars['String']>;
  redirectionUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CmsSectionStaticCarouselParams = {
  __typename?: 'CMSSectionStaticCarouselParams';
  buttonRedirection?: Maybe<Scalars['String']>;
  itemsDisplayType?: Maybe<CmsSectionItemsDisplayType>;
  title?: Maybe<Scalars['String']>;
};

export type CmsSectionStaticCustomParams = {
  __typename?: 'CMSSectionStaticCustomParams';
  title?: Maybe<Scalars['String']>;
};

export type CmsSectionStaticGridParams = {
  __typename?: 'CMSSectionStaticGridParams';
  title?: Maybe<Scalars['String']>;
};

export type CmsSectionStaticListParams = {
  __typename?: 'CMSSectionStaticListParams';
  title?: Maybe<Scalars['String']>;
};

export type CmsSectionStaticParams = CmsSectionStaticAccordionParams | CmsSectionStaticAdParams | CmsSectionStaticCarouselParams | CmsSectionStaticCustomParams | CmsSectionStaticGridParams | CmsSectionStaticListParams | CmsSectionStaticSliderParams;

export type CmsSectionStaticSliderParams = {
  __typename?: 'CMSSectionStaticSliderParams';
  ratio?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Clip = {
  __typename?: 'Clip';
  Event?: Maybe<Event>;
  EventId: Scalars['ID'];
  Tags?: Maybe<Array<Maybe<Tag>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  poster?: Maybe<Scalars['String']>;
  shareUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Clips = {
  __typename?: 'Clips';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<Clip>>>;
};

export type Competition = {
  __typename?: 'Competition';
  Tags?: Maybe<Array<Maybe<Tag>>>;
  displayOrder?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type Competitions = {
  __typename?: 'Competitions';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<Competition>>>;
};

export type ContactInput = {
  email: Scalars['String'];
  message: Scalars['String'];
  subject: Scalars['String'];
};

export type ContactOutput = {
  __typename?: 'ContactOutput';
  res?: Maybe<Scalars['String']>;
};

export enum ErrorType {
  AlreadyExists = 'AlreadyExists',
  BadConfirmation = 'BadConfirmation',
  BadValue = 'BadValue',
  IsRequired = 'IsRequired'
}

export type Event = {
  __typename?: 'Event';
  Challengers: Array<Team>;
  EventAttachments?: Maybe<Array<Maybe<EventAttachment>>>;
  ItemProducts?: Maybe<Array<Maybe<ItemProduct>>>;
  Markers?: Maybe<Array<Maybe<Marker>>>;
  PaymentOffers?: Maybe<Array<Maybe<PaymentOffer>>>;
  Round?: Maybe<Round>;
  RoundId?: Maybe<Scalars['ID']>;
  Streams?: Maybe<Array<Maybe<Stream>>>;
  Tags?: Maybe<Array<Maybe<Tag>>>;
  Video?: Maybe<Video>;
  VideoId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  getEmbeddedCode?: Maybe<Scalars['String']>;
  getLiveStatus?: Maybe<EventLiveStatus>;
  getTags?: Maybe<Array<Maybe<Tag>>>;
  getVideo?: Maybe<Video>;
  hasPaid?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isMatchCenterAvailable?: Maybe<Scalars['Boolean']>;
  isPaid?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  placeholder?: Maybe<Placeholder>;
  pricingPlans?: Maybe<Array<Maybe<Scalars['String']>>>;
  refereeName?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['RawObject']>;
  shareUrl?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  state?: Maybe<EventState>;
  stats?: Maybe<EventStats>;
  visibility?: Maybe<Visibility>;
};


export type EventGetEmbeddedCodeArgs = {
  autoplay?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  mute?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EventAccess = {
  __typename?: 'EventAccess';
  Streams?: Maybe<Array<Maybe<Stream>>>;
};

export type EventAttachment = {
  __typename?: 'EventAttachment';
  ext?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type EventFilterInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<EventState>;
  visibility?: InputMaybe<Visibility>;
};

export enum EventLiveStatus {
  IsFuture = 'isFuture',
  IsLive = 'isLive',
  IsPast = 'isPast'
}

export enum EventState {
  LiveDailymotion = 'liveDailymotion',
  LiveOff = 'liveOff',
  LiveOn = 'liveOn',
  Replay = 'replay'
}

export type EventStats = {
  __typename?: 'EventStats';
  awayTeam?: Maybe<TeamStats>;
  homeTeam?: Maybe<TeamStats>;
};

export type EventTeam = {
  __typename?: 'EventTeam';
  coachName?: Maybe<Scalars['String']>;
  homeFieldName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jerseyPicture?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** @deprecated Use pictureUrl */
  picture?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  teammates?: Maybe<Array<Maybe<EventTeammate>>>;
};

export type EventTeammate = {
  __typename?: 'EventTeammate';
  country?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jerseyPicture?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type Events = {
  __typename?: 'Events';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<Event>>>;
};

export type Fan = {
  __typename?: 'Fan';
  Tags?: Maybe<Array<Maybe<Tag>>>;
  address?: Maybe<Scalars['String']>;
  authToken?: Maybe<AccessToken>;
  birthYear?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  getActiveSubscriptions?: Maybe<Array<Maybe<FanSubscription>>>;
  getActivities: FanActivities;
  getFanProducts?: Maybe<FanProducts>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  meta?: Maybe<FanMeta>;
  phone?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  tracker?: Maybe<Scalars['RawObject']>;
  username?: Maybe<Scalars['String']>;
};


export type FanGetActivitiesArgs = {
  resourceType?: InputMaybe<ResourceType>;
  type?: InputMaybe<ActivityType>;
};


export type FanGetFanProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

export type FanActivities = {
  __typename?: 'FanActivities';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<FanActivity>>>;
};

export type FanActivitiesInput = {
  resourceIds: Array<InputMaybe<Scalars['ID']>>;
  resourceType: ResourceType;
  type: ActivityType;
};

export type FanActivity = {
  __typename?: 'FanActivity';
  createdAt?: Maybe<Scalars['String']>;
  getResource?: Maybe<FanActivityResourceResponse>;
  id: Scalars['ID'];
  resourceId: Scalars['ID'];
  resourceType: ResourceType;
  type: ActivityType;
  updatedAt?: Maybe<Scalars['String']>;
};

export type FanActivityInput = {
  resourceId: Scalars['ID'];
  resourceType: ResourceType;
  type: ActivityType;
};

export type FanActivityResourceResponse = Event | Tag | Team | Teammate | Video;

export type FanInput = {
  birthYear?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<FanMetaInput>;
  password?: InputMaybe<Scalars['String']>;
  passwordConfirmation?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  preferredLanguage?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type FanMeta = {
  __typename?: 'FanMeta';
  notifications?: Maybe<FanMetaNotifications>;
  payment?: Maybe<FanMetaPayment>;
  population?: Maybe<FanMetaPopulation>;
};

export type FanMetaInput = {
  notifications?: InputMaybe<FanMetaNotificationsInput>;
  oneSignalSessionId?: InputMaybe<Scalars['String']>;
};

export type FanMetaNotifications = {
  __typename?: 'FanMetaNotifications';
  events?: Maybe<Array<Maybe<FanMetaNotificationsEvents>>>;
  favoriteCompetitions?: Maybe<Array<Maybe<FanMetaNotificationsFavoriteCompetitions>>>;
  favoriteTeams?: Maybe<Array<Maybe<FanMetaNotificationsFavoriteTeams>>>;
  general?: Maybe<Array<Maybe<FanMetaNotificationsGeneral>>>;
};

export enum FanMetaNotificationsEvents {
  EndScores = 'endScores',
  Goals = 'goals',
  KickOff = 'kickOff'
}

export type FanMetaNotificationsFavoriteCompetitions = {
  __typename?: 'FanMetaNotificationsFavoriteCompetitions';
  events?: Maybe<Array<Maybe<FanMetaNotificationsEvents>>>;
  getCompetition?: Maybe<Competition>;
  id: Scalars['ID'];
};

export type FanMetaNotificationsFavoriteInput = {
  events?: InputMaybe<Array<InputMaybe<FanMetaNotificationsEvents>>>;
  id: Scalars['ID'];
};

export type FanMetaNotificationsFavoriteTeams = {
  __typename?: 'FanMetaNotificationsFavoriteTeams';
  events?: Maybe<Array<Maybe<FanMetaNotificationsEvents>>>;
  getTeam?: Maybe<Team>;
  id: Scalars['ID'];
};

export enum FanMetaNotificationsGeneral {
  GeneralInfo = 'generalInfo',
  LiveEvents = 'liveEvents',
  SocialNetworks = 'socialNetworks'
}

export type FanMetaNotificationsInput = {
  events?: InputMaybe<Array<InputMaybe<FanMetaNotificationsEvents>>>;
  favoriteCompetitions?: InputMaybe<Array<InputMaybe<FanMetaNotificationsFavoriteInput>>>;
  favoriteTeams?: InputMaybe<Array<InputMaybe<FanMetaNotificationsFavoriteInput>>>;
  general?: InputMaybe<Array<InputMaybe<FanMetaNotificationsGeneral>>>;
};

export type FanMetaPayment = {
  __typename?: 'FanMetaPayment';
  apple?: Maybe<Array<Maybe<FanMetaPaymentAppleOrder>>>;
  sessions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FanMetaPaymentAppleOrder = {
  __typename?: 'FanMetaPaymentAppleOrder';
  productIdentifier: Scalars['String'];
  transactionIdentifier: Scalars['String'];
  transactionReceipt: Scalars['String'];
};

export type FanMetaPaymentAppleOrderInput = {
  productIdentifier: Scalars['String'];
  transactionIdentifier: Scalars['String'];
  transactionReceipt: Scalars['String'];
};

export type FanMetaPopulation = {
  __typename?: 'FanMetaPopulation';
  endDate?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
};

export type FanProduct = {
  __typename?: 'FanProduct';
  canceled?: Maybe<Scalars['Boolean']>;
  paymentDate?: Maybe<Scalars['String']>;
  paymentOfferId?: Maybe<Scalars['ID']>;
  paymentType?: Maybe<Scalars['String']>;
  periodEndDate?: Maybe<Scalars['String']>;
  productId: Scalars['ID'];
  provider?: Maybe<PaymentOfferProvider>;
  status?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type FanProducts = {
  __typename?: 'FanProducts';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<FanProduct>>>;
};

export type FanSubscription = {
  __typename?: 'FanSubscription';
  cancelled?: Maybe<Scalars['Boolean']>;
  paymentOfferId?: Maybe<Scalars['ID']>;
  periodEndDate?: Maybe<Scalars['Int']>;
  periodStartDate?: Maybe<Scalars['Int']>;
  planId?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  description?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type InputCmsSectionFilters = {
  displayValue?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type InputPageSectionFilters = {
  displayValue?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ItemProduct = {
  __typename?: 'ItemProduct';
  itemId: Scalars['ID'];
  itemType: Scalars['String'];
  productId: Scalars['ID'];
};

export type JsonType = {
  __typename?: 'JSONType';
  object?: Maybe<Scalars['RawObject']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  facebookAccessToken?: InputMaybe<Scalars['String']>;
  googleTokenId?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  vendorSSO?: InputMaybe<VendorSso>;
};

export type Marker = {
  __typename?: 'Marker';
  ChallengerId?: Maybe<Scalars['ID']>;
  MarkerTypeId?: Maybe<Scalars['ID']>;
  ParentId?: Maybe<Scalars['ID']>;
  dailymotionRepostId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endTime: Scalars['Float'];
  facebookVideoId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  notifications?: Maybe<Array<Maybe<Scalars['Int']>>>;
  shouldDisplayChallengerProfile?: Maybe<Scalars['Boolean']>;
  startTime: Scalars['Float'];
};

export type ModelErrors = {
  __typename?: 'ModelErrors';
  accountKey?: Maybe<ErrorType>;
  activityType?: Maybe<ErrorType>;
  email?: Maybe<ErrorType>;
  password?: Maybe<ErrorType>;
  status?: Maybe<ErrorType>;
  username?: Maybe<ErrorType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addActivities: FanActivities;
  addActivity: FanActivity;
  addAppleOrder: Fan;
  cancelStripeSubscription: Scalars['String'];
  cancelStripeSubscriptionViaPS: StripeSubscriptionEvent;
  confirmAccount: Fan;
  createStripeCheckoutSession: StripeCheckoutSession;
  createStripeSubscription?: Maybe<StripeSubscriptionStatus>;
  createStripeSubscriptionViaPS?: Maybe<StripeSubscriptionEvent>;
  deleteAccount: Fan;
  deleteActivity: FanActivity;
  deleteStripeSubscription: Scalars['String'];
  forgotPassword: Scalars['String'];
  login: AccessToken;
  logout: Scalars['String'];
  reconfirmAccount: Fan;
  refreshToken: AccessToken;
  resetPassword: Fan;
  sendContactEmail: ContactOutput;
  signup: Fan;
  updateAccount: Fan;
  validateAccount: Scalars['String'];
};


export type MutationAddActivitiesArgs = {
  input: FanActivitiesInput;
};


export type MutationAddActivityArgs = {
  input: FanActivityInput;
};


export type MutationAddAppleOrderArgs = {
  input: FanMetaPaymentAppleOrderInput;
};


export type MutationCancelStripeSubscriptionArgs = {
  stripeSubscriptionId: Scalars['String'];
};


export type MutationCancelStripeSubscriptionViaPsArgs = {
  stripeSubscriptionId: Scalars['String'];
};


export type MutationConfirmAccountArgs = {
  confirmationToken: Scalars['String'];
};


export type MutationCreateStripeCheckoutSessionArgs = {
  cancelUrl: Scalars['String'];
  paymentOfferId: Scalars['String'];
  successUrl: Scalars['String'];
};


export type MutationCreateStripeSubscriptionArgs = {
  couponId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  paymentMethodId: Scalars['String'];
  paymentOfferId: Scalars['ID'];
};


export type MutationCreateStripeSubscriptionViaPsArgs = {
  couponId?: InputMaybe<Scalars['String']>;
  paymentMethodId: Scalars['String'];
  paymentOfferId: Scalars['ID'];
};


export type MutationDeleteActivityArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStripeSubscriptionArgs = {
  stripeSubscriptionId: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendContactEmailArgs = {
  input: ContactInput;
};


export type MutationSignupArgs = {
  input: FanInput;
};


export type MutationUpdateAccountArgs = {
  input: FanInput;
};


export type MutationValidateAccountArgs = {
  input: FanInput;
};

export type News = {
  __typename?: 'News';
  articleUrl?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  codename?: Maybe<Scalars['String']>;
  cover?: Maybe<ArticleCover>;
  description?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<ArticleSection>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  publicationDate?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PNews = {
  __typename?: 'PNews';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<News>>>;
};

export type Page = {
  __typename?: 'Page';
  codename?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PageSection>>>;
  params?: Maybe<PageParams>;
  type?: Maybe<Scalars['String']>;
};

export type PageParams = PageVerticalLayoutParams;

export type PageSection = {
  __typename?: 'PageSection';
  sectionCodename?: Maybe<Scalars['String']>;
  sectionType?: Maybe<Scalars['String']>;
};

export type PageSectionDynamic = {
  __typename?: 'PageSectionDynamic';
  codename?: Maybe<Scalars['String']>;
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<PageSectionItem>>>;
  params?: Maybe<PageSectionDynamicParams>;
  type?: Maybe<Scalars['String']>;
};

export type PageSectionDynamicCarouselParams = {
  __typename?: 'PageSectionDynamicCarouselParams';
  buttonRedirect?: Maybe<Scalars['String']>;
  itemsDisplayType?: Maybe<PageSectionItemsDisplayType>;
  itemsType: PageSectionItemsType;
  sectionFilters?: Maybe<Array<Maybe<PageSectionFilters>>>;
  title?: Maybe<Scalars['String']>;
};

export type PageSectionDynamicGridParams = {
  __typename?: 'PageSectionDynamicGridParams';
  additionalFilters?: Maybe<Array<Maybe<PageSectionFilters>>>;
  buttonRedirect?: Maybe<Scalars['String']>;
  buttonType?: Maybe<Scalars['String']>;
  itemsType: PageSectionItemsType;
  numberOfItems?: Maybe<Scalars['Int']>;
  sectionFilters?: Maybe<Array<Maybe<PageSectionFilters>>>;
  title?: Maybe<Scalars['String']>;
};

export type PageSectionDynamicParams = PageSectionDynamicCarouselParams | PageSectionDynamicGridParams | PageSectionDynamicSliderParams;

export type PageSectionDynamicSliderParams = {
  __typename?: 'PageSectionDynamicSliderParams';
  itemsType: PageSectionItemsType;
  sectionFilters?: Maybe<Array<Maybe<PageSectionFilters>>>;
  title?: Maybe<Scalars['String']>;
};

export type PageSectionFilters = {
  __typename?: 'PageSectionFilters';
  displayValue?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PageSectionItem = PageSectionItemArticle | PageSectionItemEvent | PageSectionItemFile | PageSectionItemImage | PageSectionItemVideo;

export type PageSectionItemArticle = {
  __typename?: 'PageSectionItemArticle';
  _id?: Maybe<Scalars['String']>;
  item?: Maybe<News>;
  meta?: Maybe<Scalars['RawObject']>;
  type?: Maybe<PageSectionItemType>;
};

export type PageSectionItemEvent = {
  __typename?: 'PageSectionItemEvent';
  _id?: Maybe<Scalars['String']>;
  item?: Maybe<Event>;
  meta?: Maybe<Scalars['RawObject']>;
  type?: Maybe<PageSectionItemType>;
};

export type PageSectionItemFile = {
  __typename?: 'PageSectionItemFile';
  _id?: Maybe<Scalars['String']>;
  item?: Maybe<File>;
  meta?: Maybe<Scalars['RawObject']>;
  type?: Maybe<PageSectionItemType>;
};

export type PageSectionItemImage = {
  __typename?: 'PageSectionItemImage';
  _id?: Maybe<Scalars['String']>;
  item?: Maybe<Image>;
  type?: Maybe<PageSectionItemType>;
};

export enum PageSectionItemType {
  Article = 'article',
  Event = 'event',
  File = 'file',
  Image = 'image',
  Video = 'video'
}

export type PageSectionItemVideo = {
  __typename?: 'PageSectionItemVideo';
  _id?: Maybe<Scalars['String']>;
  item?: Maybe<Video>;
  meta?: Maybe<Scalars['RawObject']>;
  type?: Maybe<PageSectionItemType>;
};

export enum PageSectionItemsDisplayType {
  Landscape = 'landscape',
  Portrait = 'portrait'
}

export enum PageSectionItemsType {
  Event = 'event',
  Video = 'video'
}

export type PageSectionStatic = {
  __typename?: 'PageSectionStatic';
  codename?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PageSectionItem>>>;
  params?: Maybe<PageSectionStaticParams>;
  type?: Maybe<Scalars['String']>;
};

export type PageSectionStaticAccordionParams = {
  __typename?: 'PageSectionStaticAccordionParams';
  ratio?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageSectionStaticAdParams = {
  __typename?: 'PageSectionStaticAdParams';
  redirectionUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageSectionStaticCarouselParams = {
  __typename?: 'PageSectionStaticCarouselParams';
  buttonRedirection?: Maybe<Scalars['String']>;
  itemsDisplayType?: Maybe<PageSectionItemsDisplayType>;
  title?: Maybe<Scalars['String']>;
};

export type PageSectionStaticGridParams = {
  __typename?: 'PageSectionStaticGridParams';
  title?: Maybe<Scalars['String']>;
};

export type PageSectionStaticListParams = {
  __typename?: 'PageSectionStaticListParams';
  title?: Maybe<Scalars['String']>;
};

export type PageSectionStaticParams = PageSectionStaticAccordionParams | PageSectionStaticAdParams | PageSectionStaticCarouselParams | PageSectionStaticGridParams | PageSectionStaticListParams | PageSectionStaticSliderParams;

export type PageSectionStaticSliderParams = {
  __typename?: 'PageSectionStaticSliderParams';
  ratio?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageVerticalLayoutParams = {
  __typename?: 'PageVerticalLayoutParams';
  meta?: Maybe<Scalars['RawObject']>;
  title?: Maybe<Scalars['String']>;
};

export type PaginationCursor = {
  __typename?: 'PaginationCursor';
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type PaymentOffer = {
  __typename?: 'PaymentOffer';
  Tags?: Maybe<Array<Maybe<Tag>>>;
  appleId?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  interval?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paymentOfferType?: Maybe<PaymentOfferType>;
  price?: Maybe<Scalars['Int']>;
  stripeId?: Maybe<Scalars['String']>;
  stripeName?: Maybe<Scalars['String']>;
  trialPeriodDays?: Maybe<Scalars['Int']>;
};

export enum PaymentOfferProvider {
  Apple = 'apple',
  Google = 'google',
  Stripe = 'stripe'
}

export enum PaymentOfferType {
  Plan = 'plan',
  Sku = 'sku'
}

export type PaymentOffers = {
  __typename?: 'PaymentOffers';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<PaymentOffer>>>;
};

export enum PaymentType {
  OneTime = 'one_time',
  Recurring = 'recurring'
}

export type Placeholder = {
  __typename?: 'Placeholder';
  poster?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PlayerRole = {
  __typename?: 'PlayerRole';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  paymentOffers?: Maybe<Array<Maybe<ProductPaymentOffer>>>;
  productId: Scalars['ID'];
  status: ProductStatus;
  weight?: Maybe<Scalars['String']>;
};

export type ProductPaymentOffer = {
  __typename?: 'ProductPaymentOffer';
  currency?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  paymentOfferId: Scalars['ID'];
  paymentType?: Maybe<PaymentType>;
  population?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  provider: PaymentOfferProvider;
  providerPaymentOfferId?: Maybe<Scalars['String']>;
  status: ProductPaymentOfferStatus;
};

export enum ProductPaymentOfferStatus {
  Active = 'active',
  Archived = 'archived'
}

export enum ProductStatus {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published'
}

export type Products = {
  __typename?: 'Products';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<Product>>>;
};

export type Query = {
  __typename?: 'Query';
  allClips: Clips;
  allCompetitions: Competitions;
  allEvents: Events;
  allNews: PNews;
  allPaymentOffers: Array<Maybe<PaymentOffer>>;
  allPlayerRoles?: Maybe<Array<Maybe<PlayerRole>>>;
  allProducts: Products;
  allRounds: Rounds;
  allSeasons: Seasons;
  allStatsTypes?: Maybe<StatsTypes>;
  allTeammates: Teammates;
  allTeams: Teams;
  allVideos: Videos;
  clip?: Maybe<Clip>;
  currentSeason?: Maybe<Season>;
  event?: Maybe<Event>;
  eventAccess: EventAccess;
  fixtures?: Maybe<Array<Maybe<Event>>>;
  getCMSPage?: Maybe<CmsPage>;
  getCMSSectionCustom?: Maybe<CmsSectionCustom>;
  getCMSSectionDynamic?: Maybe<CmsSectionDynamic>;
  getCMSSectionStatic?: Maybe<CmsSectionStatic>;
  getPage?: Maybe<Page>;
  getPageSectionDynamic?: Maybe<PageSectionDynamic>;
  getPageSectionStatic?: Maybe<PageSectionStatic>;
  getStandings?: Maybe<Scalars['RawObject']>;
  getStats?: Maybe<Scalars['RawObject']>;
  getStripeCoupon: StripeCoupon;
  hello?: Maybe<Scalars['String']>;
  helloJSON?: Maybe<Scalars['RawObject']>;
  highlights?: Maybe<Videos>;
  indexActivities: FanActivities;
  indexTags: Tags;
  latestVideos?: Maybe<Array<Maybe<Video>>>;
  listEvents?: Maybe<Array<Maybe<Event>>>;
  listFixtures?: Maybe<Array<Maybe<Event>>>;
  listResults?: Maybe<Array<Maybe<Event>>>;
  me: Fan;
  myClips: Clips;
  news: News;
  results?: Maybe<Array<Maybe<Event>>>;
  round: Round;
  searchTeams?: Maybe<Array<Maybe<Team>>>;
  searchVideos?: Maybe<Videos>;
  showStripeCoupon: StripeCoupon;
  spotlight?: Maybe<Array<Maybe<Event>>>;
  tag?: Maybe<Tag>;
  team: Team;
  teammate: Teammate;
  validateFanSSOToken?: Maybe<Scalars['Boolean']>;
  vendorAuthRequestToken: VendorAccessToken;
  video: Video;
  videoAccess: VideoAccess;
};


export type QueryAllClipsArgs = {
  UserId?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['String']>;
};


export type QueryAllCompetitionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryAllEventsArgs = {
  ChallengerId?: InputMaybe<Scalars['ID']>;
  CompetitionId?: InputMaybe<Scalars['ID']>;
  RoundId?: InputMaybe<Scalars['ID']>;
  SeasonId?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
};


export type QueryAllNewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryAllPaymentOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  paymentOfferType?: InputMaybe<PaymentOfferType>;
};


export type QueryAllProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};


export type QueryAllRoundsArgs = {
  CompetitionId: Scalars['ID'];
  SeasonId: Scalars['ID'];
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryAllSeasonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryAllStatsTypesArgs = {
  PlayerRoleId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<StatsTypesType>;
};


export type QueryAllTeammatesArgs = {
  CompetitionId?: InputMaybe<Scalars['ID']>;
  PlayerRoleId?: InputMaybe<Scalars['String']>;
  SeasonId?: InputMaybe<Scalars['ID']>;
  TeamId?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryAllTeamsArgs = {
  CompetitionId?: InputMaybe<Scalars['ID']>;
  SeasonId?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  cacheKey?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryAllVideosArgs = {
  ChallengerId?: InputMaybe<Scalars['ID']>;
  CompetitionId?: InputMaybe<Scalars['ID']>;
  RoundId?: InputMaybe<Scalars['ID']>;
  SeasonId?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<EventState>;
  tagIds?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  teamIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  visibility?: InputMaybe<Visibility>;
};


export type QueryClipArgs = {
  id: Scalars['ID'];
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryEventAccessArgs = {
  id: Scalars['ID'];
};


export type QueryFixturesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCmsPageArgs = {
  CMSPageCodename: Scalars['String'];
  previewFlag?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetCmsSectionCustomArgs = {
  CMSSectionCodename: Scalars['String'];
  previewFlag?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetCmsSectionDynamicArgs = {
  CMSSectionCodename: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<InputMaybe<InputCmsSectionFilters>>>;
  limit?: InputMaybe<Scalars['Int']>;
  previewFlag?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetCmsSectionStaticArgs = {
  CMSSectionCodename: Scalars['String'];
  previewFlag?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetPageArgs = {
  pageName: Scalars['String'];
};


export type QueryGetPageSectionDynamicArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<InputMaybe<InputPageSectionFilters>>>;
  limit?: InputMaybe<Scalars['Int']>;
  pageSectionName: Scalars['String'];
};


export type QueryGetPageSectionStaticArgs = {
  pageSectionName: Scalars['String'];
};


export type QueryGetStandingsArgs = {
  CompetitionId?: InputMaybe<Scalars['ID']>;
  SeasonId?: InputMaybe<Scalars['ID']>;
  session?: InputMaybe<Scalars['String']>;
};


export type QueryGetStatsArgs = {
  filters?: InputMaybe<Scalars['RawObject']>;
};


export type QueryGetStripeCouponArgs = {
  promoCode: Scalars['String'];
};


export type QueryHighlightsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryIndexActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  resourceType?: InputMaybe<ResourceType>;
  type?: InputMaybe<ActivityType>;
};


export type QueryIndexTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  followable?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  tagType?: InputMaybe<Scalars['String']>;
};


export type QueryLatestVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  teamIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type QueryListEventsArgs = {
  filter?: InputMaybe<EventFilterInput>;
};


export type QueryListFixturesArgs = {
  filter?: InputMaybe<EventFilterInput>;
};


export type QueryListResultsArgs = {
  filter?: InputMaybe<EventFilterInput>;
};


export type QueryMyClipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['String']>;
};


export type QueryNewsArgs = {
  id: Scalars['String'];
  params?: InputMaybe<Scalars['RawObject']>;
};


export type QueryResultsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryRoundArgs = {
  CompetitionId: Scalars['ID'];
  SeasonId: Scalars['ID'];
  id: Scalars['ID'];
};


export type QuerySearchTeamsArgs = {
  filter?: InputMaybe<TeamFilterInput>;
};


export type QuerySearchVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  term?: InputMaybe<Scalars['String']>;
};


export type QueryShowStripeCouponArgs = {
  promoCode: Scalars['String'];
};


export type QuerySpotlightArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
};


export type QueryTeammateArgs = {
  id: Scalars['ID'];
};


export type QueryValidateFanSsoTokenArgs = {
  fanSSOId?: InputMaybe<Scalars['String']>;
  fanSSOToken?: InputMaybe<Scalars['String']>;
  vendorName: Scalars['String'];
};


export type QueryVendorAuthRequestTokenArgs = {
  vendorName: Scalars['String'];
};


export type QueryVideoArgs = {
  id: Scalars['ID'];
};


export type QueryVideoAccessArgs = {
  id: Scalars['ID'];
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  resetPasswordToken: Scalars['String'];
};

export enum ResourceType {
  Article = 'article',
  Challenger = 'challenger',
  Event = 'event',
  Marker = 'marker',
  Tag = 'tag',
  Team = 'team',
  Teammate = 'teammate',
  Video = 'video'
}

export type Round = {
  __typename?: 'Round';
  CompetitionId: Scalars['ID'];
  Events?: Maybe<Array<Maybe<Event>>>;
  SeasonId: Scalars['ID'];
  Tags?: Maybe<Array<Maybe<Tag>>>;
  competitionOrder?: Maybe<Scalars['Int']>;
  current?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use Events array instead */
  getEvents?: Maybe<Events>;
  id: Scalars['ID'];
  name: Scalars['String'];
  shortName?: Maybe<Scalars['String']>;
};


export type RoundGetEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Rounds = {
  __typename?: 'Rounds';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<Round>>>;
};

export type Season = {
  __typename?: 'Season';
  Tags?: Maybe<Array<Maybe<Tag>>>;
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
};

export type Seasons = {
  __typename?: 'Seasons';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<Season>>>;
};

export type Squad = {
  __typename?: 'Squad';
  PlayerRoleId?: Maybe<Scalars['ID']>;
  SeasonId: Scalars['ID'];
  /** @deprecated use getTeam instead */
  Team?: Maybe<Team>;
  TeamId: Scalars['ID'];
  TeammateId: Scalars['ID'];
  getPlayerRole?: Maybe<PlayerRole>;
  getSeason?: Maybe<Season>;
  getTeam?: Maybe<Team>;
  getTeammate?: Maybe<Teammate>;
  /** @deprecated do not use */
  id?: Maybe<Scalars['ID']>;
  /** @deprecated use pictureUrl from model Team */
  logo?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['RawObject']>;
  /** @deprecated use name from model Team or Teammate */
  name?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
};

export type Stats = {
  __typename?: 'Stats';
  result?: Maybe<Scalars['RawObject']>;
};

export type StatsType = {
  __typename?: 'StatsType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StatsTypes = {
  __typename?: 'StatsTypes';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<StatsType>>>;
};

export enum StatsTypesType {
  Team = 'team',
  Teammate = 'teammate'
}

export type Stream = {
  __typename?: 'Stream';
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['String']>;
  streamType: StreamType;
  url?: Maybe<Scalars['String']>;
};

export enum StreamType {
  Additionnal = 'additionnal',
  Backup = 'backup',
  Main = 'main'
}

export type StripeCheckoutSession = {
  __typename?: 'StripeCheckoutSession';
  id?: Maybe<Scalars['String']>;
};

export type StripeCoupon = {
  __typename?: 'StripeCoupon';
  amountOff?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  durationInMonths?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['RawObject']>;
  name?: Maybe<Scalars['String']>;
  percentOff?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionEvent = {
  __typename?: 'StripeSubscriptionEvent';
  message?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionStatus = {
  __typename?: 'StripeSubscriptionStatus';
  message?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  PaymentOffers?: Maybe<Array<Maybe<PaymentOffer>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  placeholders?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagType?: Maybe<Scalars['String']>;
};

export type Tags = {
  __typename?: 'Tags';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<Tag>>>;
};

export type Team = {
  __typename?: 'Team';
  Tags?: Maybe<Array<Maybe<Tag>>>;
  coachName?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  covers?: Maybe<Scalars['String']>;
  getLatestVideos: Videos;
  getSquads?: Maybe<Array<Maybe<Squad>>>;
  history?: Maybe<Scalars['String']>;
  homeFieldName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jerseyPicture?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** @deprecated Use pictureUrl */
  picture?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  social?: Maybe<Scalars['RawObject']>;
};


export type TeamGetLatestVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<EventState>;
  visibility?: InputMaybe<Visibility>;
};


export type TeamGetSquadsArgs = {
  SeasonId?: InputMaybe<Scalars['ID']>;
};

export type TeamFilterInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TeamStats = {
  __typename?: 'TeamStats';
  goals?: Maybe<Scalars['Int']>;
  goalsConceded?: Maybe<Scalars['Int']>;
  ownGoals?: Maybe<Scalars['Int']>;
  possession?: Maybe<Scalars['Int']>;
  redCards?: Maybe<Scalars['Int']>;
  saves?: Maybe<Scalars['Int']>;
  shots?: Maybe<Scalars['Int']>;
  shotsOnTarget?: Maybe<Scalars['Int']>;
  team?: Maybe<EventTeam>;
  yellowCards?: Maybe<Scalars['Int']>;
};

export type Teammate = {
  __typename?: 'Teammate';
  TeamId?: Maybe<Scalars['ID']>;
  birthday?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  getSquads?: Maybe<Array<Maybe<Squad>>>;
  id: Scalars['ID'];
  jerseyPicture?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};


export type TeammateGetSquadsArgs = {
  SeasonId?: InputMaybe<Scalars['ID']>;
};

export type Teammates = {
  __typename?: 'Teammates';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<Teammate>>>;
};

export type Teams = {
  __typename?: 'Teams';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<Team>>>;
};

export type VendorAccessToken = {
  __typename?: 'VendorAccessToken';
  accessToken?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['RawObject']>;
};

export type Video = {
  __typename?: 'Video';
  Event?: Maybe<Event>;
  ItemProducts?: Maybe<Array<Maybe<ItemProduct>>>;
  PaymentOffers?: Maybe<Array<Maybe<PaymentOffer>>>;
  Tags?: Maybe<Array<Maybe<Tag>>>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  getShareUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPaid?: Maybe<Scalars['Boolean']>;
  mobilePoster?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  poster?: Maybe<Scalars['String']>;
  publicationDate?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  vendorName?: Maybe<Scalars['String']>;
  vendorVideoId?: Maybe<Scalars['String']>;
};

export type VideoAccess = {
  __typename?: 'VideoAccess';
  Event?: Maybe<Event>;
  url?: Maybe<Scalars['String']>;
  vendorVideoId?: Maybe<Scalars['String']>;
};

export type Videos = {
  __typename?: 'Videos';
  cursor: PaginationCursor;
  items?: Maybe<Array<Maybe<Video>>>;
};

export enum Visibility {
  Private = 'private',
  Public = 'public'
}

export type VendorSso = {
  name?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  tokenMeta?: InputMaybe<Scalars['String']>;
};

export type GetAllVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllVideosQuery = { __typename?: 'Query', allVideos: { __typename: 'Videos', items?: Array<{ __typename: 'Video', id: string, name: string, poster?: string | null, mobilePoster?: string | null, url?: string | null } | null> | null } };


export const GetAllVideosDocument = gql`
    query GetAllVideos {
  allVideos(limit: 4) {
    __typename
    items {
      id
      __typename
      name
      poster
      mobilePoster
      url
    }
  }
}
    `;

/**
 * __useGetAllVideosQuery__
 *
 * To run a query within a React component, call `useGetAllVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllVideosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllVideosQuery, GetAllVideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVideosQuery, GetAllVideosQueryVariables>(GetAllVideosDocument, options);
      }
export function useGetAllVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVideosQuery, GetAllVideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVideosQuery, GetAllVideosQueryVariables>(GetAllVideosDocument, options);
        }
export type GetAllVideosQueryHookResult = ReturnType<typeof useGetAllVideosQuery>;
export type GetAllVideosLazyQueryHookResult = ReturnType<typeof useGetAllVideosLazyQuery>;
export type GetAllVideosQueryResult = Apollo.QueryResult<GetAllVideosQuery, GetAllVideosQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "ArticleSection": [
      "ArticleAd",
      "ArticleBanner",
      "ArticleEvent",
      "ArticleGallery",
      "ArticleText",
      "ArticleTitle",
      "ArticleVideo"
    ],
    "CMSPageParams": [
      "CMSPageVerticalLayoutParams"
    ],
    "CMSSectionCustomParams": [
      "CMSSectionCustomTextParams",
      "CMSSectionCustomTitleParams"
    ],
    "CMSSectionDynamicParams": [
      "CMSSectionDynamicGridParams"
    ],
    "CMSSectionItem": [
      "CMSSectionItemEvent",
      "CMSSectionItemFile",
      "CMSSectionItemImage",
      "CMSSectionItemVideo"
    ],
    "CMSSectionStaticParams": [
      "CMSSectionStaticAccordionParams",
      "CMSSectionStaticAdParams",
      "CMSSectionStaticCarouselParams",
      "CMSSectionStaticCustomParams",
      "CMSSectionStaticGridParams",
      "CMSSectionStaticListParams",
      "CMSSectionStaticSliderParams"
    ],
    "FanActivityResourceResponse": [
      "Event",
      "Tag",
      "Team",
      "Teammate",
      "Video"
    ],
    "PageParams": [
      "PageVerticalLayoutParams"
    ],
    "PageSectionDynamicParams": [
      "PageSectionDynamicCarouselParams",
      "PageSectionDynamicGridParams",
      "PageSectionDynamicSliderParams"
    ],
    "PageSectionItem": [
      "PageSectionItemArticle",
      "PageSectionItemEvent",
      "PageSectionItemFile",
      "PageSectionItemImage",
      "PageSectionItemVideo"
    ],
    "PageSectionStaticParams": [
      "PageSectionStaticAccordionParams",
      "PageSectionStaticAdParams",
      "PageSectionStaticCarouselParams",
      "PageSectionStaticGridParams",
      "PageSectionStaticListParams",
      "PageSectionStaticSliderParams"
    ]
  }
};
      export default result;
    
export interface ConfigItem {
  func: string;
  host: string;
  path: string;
  rmethod: Array<string>;
}

const urlConfig: { [key: string]: Array<ConfigItem> } = {
  OAuth2: [
    {
      func: "access_token",
      host: "https://api.weibo.com",
      path: "/oauth2/access_token",
      rmethod: ["POST"]
    },
    {
      func: "get_token_info",
      host: "https://api.weibo.com",
      path: "/oauth2/get_token_info",
      rmethod: ["POST"]
    }
  ],
  Statuses: [
    {
      func: "public_timeline",
      host: "https://api.weibo.com",
      path: "/2/statuses/public_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "friends_timeline",
      host: "https://api.weibo.com",
      path: "/2/statuses/friends_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "home_timeline",
      host: "https://api.weibo.com",
      path: "/2/statuses/home_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "friends_timeline_ids",
      host: "https://api.weibo.com",
      path: "/2/statuses/friends_timeline/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "user_timeline",
      host: "https://api.weibo.com",
      path: "/2/statuses/user_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "user_timeline_ids",
      host: "https://api.weibo.com",
      path: "/2/statuses/user_timeline/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "timeline_batch",
      host: "https://api.weibo.com",
      path: "/2/statuses/timeline_batch.json",
      rmethod: ["GET"]
    },
    {
      func: "repost_timeline",
      host: "https://api.weibo.com",
      path: "/2/statuses/repost_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "repost_timeline_ids",
      host: "https://api.weibo.com",
      path: "/2/statuses/repost_timeline/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "mentions",
      host: "https://api.weibo.com",
      path: "/2/statuses/mentions.json",
      rmethod: ["GET"]
    },
    {
      func: "mentions_ids",
      host: "https://api.weibo.com",
      path: "/2/statuses/mentions/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "bilateral_timeline",
      host: "https://api.weibo.com",
      path: "/2/statuses/bilateral_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "show",
      host: "https://api.weibo.com",
      path: "/2/statuses/show.json",
      rmethod: ["GET"]
    },
    {
      func: "show_batch",
      host: "https://api.weibo.com",
      path: "/2/statuses/show_batch.json",
      rmethod: ["GET"]
    },
    {
      func: "querymid",
      host: "https://api.weibo.com",
      path: "/2/statuses/querymid.json",
      rmethod: ["GET"]
    },
    {
      func: "queryid",
      host: "https://api.weibo.com",
      path: "/2/statuses/queryid.json",
      rmethod: ["GET"]
    },
    {
      func: "count",
      host: "https://api.weibo.com",
      path: "/2/statuses/count.json",
      rmethod: ["GET"]
    },
    {
      func: "to_me",
      host: "https://api.weibo.com",
      path: "/2/statuses/to_me.json",
      rmethod: ["GET"]
    },
    {
      func: "to_me_ids",
      host: "https://api.weibo.com",
      path: "/2/statuses/to_me/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "go",
      host: "https://api.weibo.com",
      path: "/2/statuses/go",
      rmethod: ["GET"]
    },
    {
      func: "emotions",
      host: "https://api.weibo.com",
      path: "/2/emotions.json",
      rmethod: ["GET"]
    },
    {
      func: "repost",
      host: "https://api.weibo.com",
      path: "/2/statuses/repost.json",
      rmethod: ["POST"]
    },
    {
      func: "destroy",
      host: "https://api.weibo.com",
      path: "/2/statuses/destroy.json",
      rmethod: ["POST"]
    },
    {
      func: "update",
      host: "https://api.weibo.com",
      path: "/2/statuses/update.json",
      rmethod: ["POST"]
    },
    {
      func: "share",
      host: "https://api.weibo.com",
      path: "/2/statuses/share.json",
      rmethod: ["POST"]
    },
    {
      func: "upload",
      host: "https://upload.api.weibo.com",
      path: "/2/statuses/upload.json",
      rmethod: ["POST"]
    },
    {
      func: "upload_url_text",
      host: "https://api.weibo.com",
      path: "/2/statuses/upload_url_text.json",
      rmethod: ["POST"]
    },
    {
      func: "filter_create",
      host: "https://api.weibo.com",
      path: "/2/statuses/filter/create.json",
      rmethod: ["POST"]
    },
    {
      func: "mentions_shield",
      host: "https://api.weibo.com",
      path: "/2/statuses/mentions/shield.json",
      rmethod: ["POST"]
    },
    {
      func: "tags",
      host: "https://api.weibo.com",
      path: "/2/statuses/tags.json",
      rmethod: ["GET"]
    },
    {
      func: "tags_show_batch",
      host: "https://api.weibo.com",
      path: "/2/statuses/tags/show_batch.json",
      rmethod: ["GET"]
    },
    {
      func: "tag_timeline_ids",
      host: "https://api.weibo.com",
      path: "/2/statuses/tag_timeline/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "tags_create",
      host: "https://api.weibo.com",
      path: "/2/statuses/tags/create.json",
      rmethod: ["POST"]
    },
    {
      func: "tags_destroy",
      host: "https://api.weibo.com",
      path: "/2/statuses/tags/destroy.json",
      rmethod: ["POST"]
    },
    {
      func: "tags_update",
      host: "https://api.weibo.com",
      path: "/2/statuses/tags/update.json",
      rmethod: ["POST"]
    },
    {
      func: "update_tags",
      host: "https://api.weibo.com",
      path: "/2/statuses/update_tags.json",
      rmethod: ["POST"]
    }
  ],
  Comments: [
    {
      func: "show",
      host: "https://api.weibo.com",
      path: "/2/comments/show.json",
      rmethod: ["GET"]
    },
    {
      func: "by_me",
      host: "https://api.weibo.com",
      path: "/2/comments/by_me.json",
      rmethod: ["GET"]
    },
    {
      func: "to_me",
      host: "https://api.weibo.com",
      path: "/2/comments/to_me.json",
      rmethod: ["GET"]
    },
    {
      func: "timeline",
      host: "https://api.weibo.com",
      path: "/2/comments/timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "mentions",
      host: "https://api.weibo.com",
      path: "/2/comments/mentions.json",
      rmethod: ["GET"]
    },
    {
      func: "show_batch",
      host: "https://api.weibo.com",
      path: "/2/comments/show_batch.json",
      rmethod: ["GET"]
    },
    {
      func: "create",
      host: "https://api.weibo.com",
      path: "/2/comments/create.json",
      rmethod: ["POST"]
    },
    {
      func: "destroy",
      host: "https://api.weibo.com",
      path: "/2/comments/destroy.json",
      rmethod: ["POST"]
    },
    {
      func: "destroy_batch",
      host: "https://api.weibo.com",
      path: "/2/comments/destroy_batch.json",
      rmethod: ["POST"]
    },
    {
      func: "reply",
      host: "https://api.weibo.com",
      path: "/2/comments/reply.json",
      rmethod: ["POST"]
    }
  ],
  Users: [
    {
      func: "show",
      host: "https://api.weibo.com",
      path: "/2/users/show.json",
      rmethod: ["GET"]
    },
    {
      func: "domain_show",
      host: "https://api.weibo.com",
      path: "/2/users/domain_show.json",
      rmethod: ["GET"]
    },
    {
      func: "counts",
      host: "https://api.weibo.com",
      path: "/2/users/counts.json",
      rmethod: ["GET"]
    },
    {
      func: "get_top_status",
      host: "https://api.weibo.com",
      path: "/2/users/get_top_status.json",
      rmethod: ["GET"]
    },
    {
      func: "set_top_status",
      host: "https://api.weibo.com",
      path: "/2/users/set_top_status.json",
      rmethod: ["POST"]
    },
    {
      func: "cancel_top_status",
      host: "https://api.weibo.com",
      path: "/2/users/cancel_top_status.json",
      rmethod: ["POST"]
    }
  ],
  Friendships: [
    {
      func: "friends",
      host: "https://api.weibo.com",
      path: "/2/friendships/friends.json",
      rmethod: ["GET"]
    },
    {
      func: "friends_remark_batch",
      host: "https://api.weibo.com",
      path: "/2/friendships/friends/remark_batch.json",
      rmethod: ["GET"]
    },
    {
      func: "friends_in_common",
      host: "https://api.weibo.com",
      path: "/2/friendships/friends/in_common.json",
      rmethod: ["GET"]
    },
    {
      func: "friends_bilateral",
      host: "https://api.weibo.com",
      path: "/2/friendships/friends/bilateral.json",
      rmethod: ["GET"]
    },
    {
      func: "friends_bilateral_ids",
      host: "https://api.weibo.com",
      path: "/2/friendships/friends/bilateral/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "friends_ids",
      host: "https://api.weibo.com",
      path: "/2/friendships/friends/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "followers",
      host: "https://api.weibo.com",
      path: "/2/friendships/followers.json",
      rmethod: ["GET"]
    },
    {
      func: "followers_ids",
      host: "https://api.weibo.com",
      path: "/2/friendships/followers/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "followers_active",
      host: "https://api.weibo.com",
      path: "/2/friendships/followers/active.json",
      rmethod: ["GET"]
    },
    {
      func: "friends_chain_followers",
      host: "https://api.weibo.com",
      path: "/2/friendships/friends_chain/followers.json",
      rmethod: ["GET"]
    },
    {
      func: "show",
      host: "https://api.weibo.com",
      path: "/2/friendships/show.json",
      rmethod: ["GET"]
    },
    {
      func: "create",
      host: "https://api.weibo.com",
      path: "/2/friendships/create.json",
      rmethod: ["POST"]
    },
    {
      func: "destroy",
      host: "https://api.weibo.com",
      path: "/2/friendships/destroy.json",
      rmethod: ["POST"]
    },
    {
      func: "followers_destroy",
      host: "https://api.weibo.com",
      path: "/2/friendships/followers/destroy.json",
      rmethod: ["POST"]
    },
    {
      func: "followers_destroy",
      host: "https://api.weibo.com",
      path: "/2/friendships/followers/destroy.json",
      rmethod: ["POST"]
    },
    {
      func: "remark_update",
      host: "https://api.weibo.com",
      path: "/2/friendships/remark/update.json",
      rmethod: ["POST"]
    },
    {
      func: "groups",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups.json",
      rmethod: ["GET"]
    },
    {
      func: "groups_timeline",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "groups_timeline_ids",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/timeline/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "groups_members",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/members.json",
      rmethod: ["GET"]
    },
    {
      func: "groups_members_ids",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/members/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "groups_members_description",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/members/description.json",
      rmethod: ["GET"]
    },
    {
      func: "groups_is_member",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/is_member.json",
      rmethod: ["GET"]
    },
    {
      func: "groups_listed",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/listed.json",
      rmethod: ["GET"]
    },
    {
      func: "groups_show",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/show.json",
      rmethod: ["GET"]
    },
    {
      func: "groups_show_batch",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/show_batch.json",
      rmethod: ["GET"]
    },
    {
      func: "groups_create",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/create.json",
      rmethod: ["POST"]
    },
    {
      func: "groups_update",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/update.json",
      rmethod: ["POST"]
    },
    {
      func: "groups_destroy",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/destroy.json",
      rmethod: ["POST"]
    },
    {
      func: "groups_members_add",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/members/add.json",
      rmethod: ["POST"]
    },
    {
      func: "groups_members_add_batch",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/members/add_batch.json",
      rmethod: ["POST"]
    },
    {
      func: "groups_members_update",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/members/update.json",
      rmethod: ["POST"]
    },
    {
      func: "groups_members_destroy",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/members/destroy.json",
      rmethod: ["POST"]
    },
    {
      func: "groups_order",
      host: "https://api.weibo.com",
      path: "/2/friendships/groups/order.json",
      rmethod: ["POST"]
    }
  ],
  Account: [
    {
      func: "get_privacy",
      host: "https://api.weibo.com",
      path: "/2/account/get_privacy.json",
      rmethod: ["GET"]
    },
    {
      func: "profile_school_list",
      host: "https://api.weibo.com",
      path: "/2/account/profile/school_list.json",
      rmethod: ["GET"]
    },
    {
      func: "rate_limit_status",
      host: "https://api.weibo.com",
      path: "/2/account/rate_limit_status.json",
      rmethod: ["GET"]
    },
    {
      func: "profile_email",
      host: "https://api.weibo.com",
      path: "/2/account/profile/email.json",
      rmethod: ["GET"]
    },
    {
      func: "get_uid",
      host: "https://api.weibo.com",
      path: "/2/account/get_uid.json",
      rmethod: ["GET"]
    },
    {
      func: "end_session",
      host: "https://api.weibo.com",
      path: "/2/account/end_session.json",
      rmethod: ["GET"]
    }
  ],
  Favorites: [
    {
      func: "favorites",
      host: "https://api.weibo.com",
      path: "/2/favorites.json",
      rmethod: ["GET"]
    },
    {
      func: "ids",
      host: "https://api.weibo.com",
      path: "/2/favorites/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "show",
      host: "https://api.weibo.com",
      path: "/2/favorites/show.json",
      rmethod: ["GET"]
    },
    {
      func: "by_tags",
      host: "https://api.weibo.com",
      path: "/2/favorites/by_tags.json",
      rmethod: ["GET"]
    },
    {
      func: "by_tags_ids",
      host: "https://api.weibo.com",
      path: "/2/account/get_uid.json",
      rmethod: ["GET"]
    },
    {
      func: "end_session",
      host: "https://api.weibo.com",
      path: "/2/favorites/by_tags/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "create",
      host: "https://api.weibo.com",
      path: "/2/favorites/create.json",
      rmethod: ["POST"]
    },
    {
      func: "destroy",
      host: "https://api.weibo.com",
      path: "/2/favorites/destroy.json",
      rmethod: ["POST"]
    },
    {
      func: "destroy_batch",
      host: "https://api.weibo.com",
      path: "/2/favorites/destroy_batch.json",
      rmethod: ["POST"]
    },
    {
      func: "tags_update",
      host: "https://api.weibo.com",
      path: "/2/favorites/tags/update.json",
      rmethod: ["POST"]
    },
    {
      func: "tags_update_batch",
      host: "https://api.weibo.com",
      path: "/2/favorites/tags/update_batch.json",
      rmethod: ["POST"]
    },
    {
      func: "tags_destroy_batch",
      host: "https://api.weibo.com",
      path: "/2/favorites/tags/destroy_batch.json",
      rmethod: ["POST"]
    }
  ],
  Trends: [
    {
      func: "hourly",
      host: "https://api.weibo.com",
      path: "/2/trends/hourly.json",
      rmethod: ["GET"]
    },
    {
      func: "daily",
      host: "https://api.weibo.com",
      path: "/2/trends/daily.json",
      rmethod: ["GET"]
    },
    {
      func: "weekly",
      host: "https://api.weibo.com",
      path: "/2/trends/weekly.json",
      rmethod: ["GET"]
    }
  ],
  Tags: [
    {
      func: "tags",
      host: "https://api.weibo.com",
      path: "/2/tags.json",
      rmethod: ["GET"]
    },
    {
      func: "tags_batch",
      host: "https://api.weibo.com",
      path: "/2/tags/tags_batch.json",
      rmethod: ["GET"]
    },
    {
      func: "suggestions",
      host: "https://api.weibo.com",
      path: "/2/tags/suggestions.json",
      rmethod: ["GET"]
    },
    {
      func: "create",
      host: "https://api.weibo.com",
      path: "/2/tags/create.json",
      rmethod: ["POST"]
    },
    {
      func: "destroy",
      host: "https://api.weibo.com",
      path: "/2/tags/destroy.json",
      rmethod: ["POST"]
    },
    {
      func: "destroy_batch",
      host: "https://api.weibo.com",
      path: "/2/tags/destroy_batch.json",
      rmethod: ["POST"]
    }
  ],
  Register: [
    {
      func: "verify_nickname",
      host: "https://api.weibo.com",
      path: "/2/register/verify_nickname.json",
      rmethod: ["GET"]
    }
  ],
  Search: [
    {
      func: "suggestions_users",
      host: "https://api.weibo.com",
      path: "/2/search/suggestions/users.json",
      rmethod: ["GET"]
    },
    {
      func: "suggestions_schools",
      host: "https://api.weibo.com",
      path: "/2/search/suggestions/schools.json",
      rmethod: ["GET"]
    },
    {
      func: "suggestions_companies",
      host: "https://api.weibo.com",
      path: "/2/search/suggestions/companies.json",
      rmethod: ["GET"]
    },
    {
      func: "suggestions_apps",
      host: "https://api.weibo.com",
      path: "/2/search/suggestions/apps.json",
      rmethod: ["GET"]
    },
    {
      func: "suggestions_at_users",
      host: "https://api.weibo.com",
      path: "/2/search/suggestions/at_users.json",
      rmethod: ["GET"]
    },
    {
      func: "topics",
      host: "https://api.weibo.com",
      path: "/2/search/topics.json",
      rmethod: ["GET"]
    }
  ],
  Suggestions: [
    {
      func: "users_hot",
      host: "https://api.weibo.com",
      path: "/2/suggestions/users/hot.json",
      rmethod: ["GET"]
    },
    {
      func: "users_may_interested",
      host: "https://api.weibo.com",
      path: "/2/suggestions/users/may_interested.json",
      rmethod: ["GET"]
    },
    {
      func: "users_by_status",
      host: "https://api.weibo.com",
      path: "/2/suggestions/users/by_status.json",
      rmethod: ["GET"]
    },
    {
      func: "statuses_reorder",
      host: "https://api.weibo.com",
      path: "/2/suggestions/statuses/reorder.json",
      rmethod: ["GET"]
    },
    {
      func: "statuses_reorder_ids",
      host: "https://api.weibo.com",
      path: "/2/suggestions/statuses/reorder/ids.json",
      rmethod: ["GET"]
    },
    {
      func: "favorites_hot",
      host: "https://api.weibo.com",
      path: "/2/suggestions/favorites/hot.json",
      rmethod: ["GET"]
    },
    {
      func: "users_not_interested",
      host: "https://api.weibo.com",
      path: "/2/suggestions/users/not_interested.json",
      rmethod: ["POST"]
    }
  ],
  Remind: [
    {
      func: "unread_count",
      host: "https://rm.api.weibo.com",
      path: "/2/remind/unread_count.json",
      rmethod: ["GET"]
    },
    {
      func: "set_count",
      host: "https://rm.api.weibo.com",
      path: "/2/remind/set_count.json",
      rmethod: ["POST"]
    }
  ],
  Short_url: [
    {
      func: "shorten",
      host: "https://api.weibo.com",
      path: "/2/short_url/shorten.json",
      rmethod: ["GET"]
    },
    {
      func: "expand",
      host: "https://api.weibo.com",
      path: "/2/short_url/expand.json",
      rmethod: ["GET"]
    },
    {
      func: "share_counts",
      host: "https://api.weibo.com",
      path: "/2/short_url/share/counts.json",
      rmethod: ["GET"]
    },
    {
      func: "share_statuses",
      host: "https://api.weibo.com",
      path: "/2/short_url/share/statuses.json",
      rmethod: ["GET"]
    },
    {
      func: "comment_counts",
      host: "https://api.weibo.com",
      path: "/2/short_url/comment/counts.json",
      rmethod: ["GET"]
    },
    {
      func: "comment_comments",
      host: "https://api.weibo.com",
      path: "/2/short_url/comment/comments.json",
      rmethod: ["GET"]
    }
  ],
  Notification: [
    {
      func: "send",
      host: "https://api.weibo.com",
      path: "/2/notification/send.json",
      rmethod: ["POST"]
    }
  ],
  Common: [
    {
      func: "code_to_location",
      host: "https://api.weibo.com",
      path: "/2/common/code_to_location.json",
      rmethod: ["GET"]
    },
    {
      func: "get_city",
      host: "https://api.weibo.com",
      path: "/2/common/get_city.json",
      rmethod: ["GET"]
    },
    {
      func: "get_province",
      host: "https://api.weibo.com",
      path: "/2/common/get_province.json",
      rmethod: ["GET"]
    },
    {
      func: "get_country",
      host: "https://api.weibo.com",
      path: "/2/common/get_country.json",
      rmethod: ["GET"]
    },
    {
      func: "get_timezone",
      host: "https://api.weibo.com",
      path: "/2/common/get_timezone.json",
      rmethod: ["GET"]
    }
  ],
  Place: [
    {
      func: "public_timeline",
      host: "https://api.weibo.com",
      path: "/2/place/public_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "friends_timeline",
      host: "https://api.weibo.com",
      path: "/2/place/friends_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "user_timeline",
      host: "https://api.weibo.com",
      path: "/2/place/user_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "poi_timeline",
      host: "https://api.weibo.com",
      path: "/2/place/poi_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "nearby_timeline",
      host: "https://api.weibo.com",
      path: "/2/place/nearby_timeline.json",
      rmethod: ["GET"]
    },
    {
      func: "statuses_show",
      host: "https://api.weibo.com",
      path: "/2/place/statuses/show.json",
      rmethod: ["GET"]
    },
    {
      func: "users_show",
      host: "https://api.weibo.com",
      path: "/2/place/users/show.json",
      rmethod: ["GET"]
    },
    {
      func: "users_checkins",
      host: "https://api.weibo.com",
      path: "/2/place/users/checkins.json",
      rmethod: ["GET"]
    },
    {
      func: "users_photos",
      host: "https://api.weibo.com",
      path: "/2/place/users/photos.json",
      rmethod: ["GET"]
    },
    {
      func: "users_tips",
      host: "https://api.weibo.com",
      path: "/2/place/users/tips.json",
      rmethod: ["GET"]
    },
    {
      func: "users_todos",
      host: "https://api.weibo.com",
      path: "/2/place/users/todos.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_show",
      host: "https://api.weibo.com",
      path: "/2/place/pois/show.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_users",
      host: "https://api.weibo.com",
      path: "/2/place/pois/users.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_tips",
      host: "https://api.weibo.com",
      path: "/2/place/pois/tips.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_photos",
      host: "https://api.weibo.com",
      path: "/2/place/pois/photos.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_search",
      host: "https://api.weibo.com",
      path: "/2/place/pois/search.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_category",
      host: "https://api.weibo.com",
      path: "/2/place/pois/category.json",
      rmethod: ["GET"]
    },
    {
      func: "nearby_pois",
      host: "https://api.weibo.com",
      path: "/2/place/nearby/pois.json",
      rmethod: ["GET"]
    },
    {
      func: "nearby_users",
      host: "https://api.weibo.com",
      path: "/2/place/nearby/users.json",
      rmethod: ["GET"]
    },
    {
      func: "nearby_photos",
      host: "https://api.weibo.com",
      path: "/2/place/nearby/photos.json",
      rmethod: ["GET"]
    },
    {
      func: "nearby_users_list",
      host: "https://api.weibo.com",
      path: "/2/place/nearby_users/list.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_create",
      host: "https://api.weibo.com",
      path: "/2/place/pois/create.json",
      rmethod: ["POST"]
    },
    {
      func: "pois_add_checkin",
      host: "https://api.weibo.com",
      path: "/2/place/pois/add_checkin.json",
      rmethod: ["POST"]
    },
    {
      func: "pois_add_photo",
      host: "https://api.weibo.com",
      path: "/2/place/pois/add_photo.json",
      rmethod: ["POST"]
    },
    {
      func: "pois_add_tip",
      host: "https://api.weibo.com",
      path: "/2/place/pois/add_tip.json",
      rmethod: ["POST"]
    },
    {
      func: "pois_add_todo",
      host: "https://api.weibo.com",
      path: "/2/place/pois/add_todo.json",
      rmethod: ["POST"]
    },
    {
      func: "nearby_users_create",
      host: "https://api.weibo.com",
      path: "/2/place/nearby_users/create.json",
      rmethod: ["POST"]
    },
    {
      func: "nearby_users_destroy",
      host: "https://api.weibo.com",
      path: "/2/place/nearby_users/destroy.json",
      rmethod: ["POST"]
    }
  ],
  Location: [
    {
      func: "base_get_map_image",
      host: "https://api.weibo.com",
      path: "/2/location/base/get_map_image.json",
      rmethod: ["GET"]
    },
    {
      func: "geo_ip_to_geo",
      host: "https://api.weibo.com",
      path: "/2/location/geo/ip_to_geo.json",
      rmethod: ["GET"]
    },
    {
      func: "geo_address_to_geo",
      host: "https://api.weibo.com",
      path: "/2/location/geo/address_to_geo.json",
      rmethod: ["GET"]
    },
    {
      func: "geo_geo_to_address",
      host: "https://api.weibo.com",
      path: "/2/location/geo/geo_to_address.json",
      rmethod: ["GET"]
    },
    {
      func: "geo_gps_to_offset",
      host: "https://api.weibo.com",
      path: "/2/location/geo/gps_to_offset.json",
      rmethod: ["GET"]
    },
    {
      func: "geo_is_domestic",
      host: "https://api.weibo.com",
      path: "/2/location/geo/is_domestic.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_search_by_location",
      host: "https://api.weibo.com",
      path: "/2/location/pois/search/by_location.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_search_by_geo",
      host: "https://api.weibo.com",
      path: "/2/location/pois/search/by_geo.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_search_by_area",
      host: "https://api.weibo.com",
      path: "/2/location/pois/search/by_area.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_show_batch",
      host: "https://api.weibo.com",
      path: "/2/location/pois/show_batch.json",
      rmethod: ["GET"]
    },
    {
      func: "pois_add",
      host: "https://api.weibo.com",
      path: "/2/location/pois/add.json",
      rmethod: ["POST"]
    },
    {
      func: "mobile_get_location",
      host: "https://api.weibo.com",
      path: "/2/location/mobile/get_location.json",
      rmethod: ["POST"]
    },
    {
      func: "line_drive_route",
      host: "https://api.weibo.com",
      path: "/2/location/line/drive_route.json",
      rmethod: ["GET"]
    },
    {
      func: "line_bus_route",
      host: "https://api.weibo.com",
      path: "/2/location/line/bus_route.json",
      rmethod: ["GET"]
    },
    {
      func: "line_bus_line",
      host: "https://api.weibo.com",
      path: "/2/location/line/bus_line.json",
      rmethod: ["GET"]
    },
    {
      func: "line_bus_station",
      host: "https://api.weibo.com",
      path: "/2/location/line/bus_station.json",
      rmethod: ["GET"]
    },
    {
      func: "line_bus_station",
      host: "https://api.weibo.com",
      path: "/2/location/line/bus_station.json",
      rmethod: ["GET"]
    }
  ]
};

export default urlConfig;

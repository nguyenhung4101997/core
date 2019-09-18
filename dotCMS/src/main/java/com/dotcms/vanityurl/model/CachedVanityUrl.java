package com.dotcms.vanityurl.model;

import static com.liferay.util.StringUtil.GROUP_REPLACEMENT_PREFIX;

import java.io.Serializable;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.dotcms.vanityurl.util.VanityUrlUtil;

/**
 * This class construct a reduced version of the {@link VanityUrl}
 * object to be saved on cache
 *
 * @author oswaldogallango
 * @version 4.2.0
 * @since June 22, 2017
 */
public class CachedVanityUrl implements Serializable {

    private static final long serialVersionUID = 1L;
    private final Pattern pattern;
    private final String vanityUrlId;
    private final String url;
    private final String siteId;
    private final long languageId;
    private final String forwardTo;
    private final int response;
    private final int order;

    /**
     * Generate a cached Vanity URL object
     *
     * @param vanityUrl The vanityurl Url to cache
     */
    public CachedVanityUrl(VanityUrl vanityUrl) {

        String regex = VanityUrlUtil.isValidRegex(vanityUrl.getURI()) ? vanityUrl.getURI()
                : null;
        this.pattern = regex!=null ? Pattern.compile(regex, Pattern.CASE_INSENSITIVE):null;
        this.vanityUrlId = vanityUrl.getIdentifier();
        this.url = vanityUrl.getURI();
        this.languageId = vanityUrl.getLanguageId();
        this.siteId = vanityUrl.getSite();
        this.forwardTo = vanityUrl.getForwardTo();
        this.response = vanityUrl.getAction();
        this.order    = vanityUrl.getOrder();
    }



    public int getOrder() {
        return order;
    }

    /**
     * Get the URL from the Cached Vanity URL
     *
     * @return the URL from the Cached Vanity URL
     */
    public String getUrl() {
        return url;
    }

    /**
     * Get the Site Id from the Cached Vanity URL
     *
     * @return the Site ID from the Cached Vanity URL
     */
    public String getSiteId() {
        return siteId;
    }

    /**
     * Get the Language Id from the Cached Vanity URL
     *
     * @return the language Id from the Cached Vanity URL
     */
    public long getLanguageId() {
        return languageId;
    }

    /**
     * Get the Forward to path from the Cached Vanity URL
     *
     * @return the Forward to path from the Cached Vanity URL
     */
    public String getForwardTo() {
        return forwardTo;
    }

    /**
     * Get the Response code from the Cached Vanity URL
     *
     * @return the Response code from the Cached Vanity URL
     */
    public int getResponse() {
        return response;
    }

    /**
     * Get the URI Pattern from the Cached Vanity URL
     *
     * @return the URI Pattern from the Cached Vanity URL
     */
    public Pattern getPattern() {
        return pattern;
    }

    
    public String processForward(final String url) {
      String newForward = this.forwardTo;
      if(pattern!=null) {
        Matcher matcher = pattern.matcher(url);
        if (matcher.matches() && forwardTo.indexOf(GROUP_REPLACEMENT_PREFIX)>-1) {
          for(int i=1;i<matcher.groupCount();i++) {
            newForward=newForward.replace("$"+i, matcher.group(i));
          }
        }
      }
      return newForward;
    }
    
    
    
    
    /**
     * get the Vanitu Url Identifier
     *
     * @return The Vanity Url Identifier
     */
    public String getVanityUrlId() {
        return vanityUrlId;
    }


    @Override
    public String toString() {
        return "CachedVanityUrl{" +
                "pattern=" + pattern +
                ", vanityUrlId='" + vanityUrlId + '\'' +
                ", url='" + url + '\'' +
                ", siteId='" + siteId + '\'' +
                ", languageId=" + languageId +
                ", forwardTo='" + forwardTo + '\'' +
                ", response=" + response +
                ", order=" + order +
                '}';
    }
}
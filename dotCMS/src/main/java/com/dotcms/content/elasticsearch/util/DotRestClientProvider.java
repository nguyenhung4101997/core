package com.dotcms.content.elasticsearch.util;

import com.dotmarketing.util.Config;
import com.dotmarketing.util.Logger;
import org.elasticsearch.client.RestHighLevelClient;

/**
 * Provider used to load custom High Level Rest clients to handle API requests in Elastic
 * By default, {@link DotRestHighLevelClient} is used if `ES_REST_CLIENT_PROVIDER_CLASS` is not set
 * @author nollymar
 */
public abstract class DotRestClientProvider {

    protected DotRestClientProvider() {
    }

    private static DotRestClientProvider INSTANCE;

    public static DotRestClientProvider getInstance() {
        if (INSTANCE == null) {
            final String providerClassName = Config
                    .getStringProperty("ES_REST_CLIENT_PROVIDER_CLASS",
                            "com.dotcms.content.elasticsearch.util.DotRestHighLevelClient");
            try {
                INSTANCE = ((Class<DotRestClientProvider>) Class.forName(providerClassName))
                        .newInstance();
                Logger.info(DotRestHighLevelClient.class,
                        "DotRestClientProvider " + providerClassName + " loaded successfully");
            } catch (ClassNotFoundException | InstantiationException | IllegalAccessException e) {
                INSTANCE = new DotRestHighLevelClient();
                Logger.error(DotRestClientProvider.class,
                        "Unable to get the class reference for the DotRestClientProvider  ["
                                + providerClassName + "].", e);
            }
        }

        return INSTANCE;
    }

    public abstract RestHighLevelClient getClient();
}
